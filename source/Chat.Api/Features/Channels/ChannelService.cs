using Chat.Features.Channels;
using Chat.Infrastructure;
using Chat.Features.Users;
using Elasticsearch.Net;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;

namespace Chat.Features.Chat
{
    public class ChannelService
    {
        private readonly IElasticClient _client;
        private readonly UserService _userService;

        private readonly ChatService _chatService; 

        public ChannelService(IElasticClient client = null, UserService userService = null, ChatService chatService = null) 
        {
            _client = client ?? ElasticClientFactory.Create();
            _userService = userService ?? new UserService();
            _chatService = chatService ?? new ChatService();
        }

        internal async Task<Channel> FindChannel(IPrincipal user, string name)
        {
            if (name.ToLowerInvariant() == "global")
                await Ensure(user, "Global");

            var response = await _client.SearchAsync<Channel>(m => m
                .Query(q => q
                    .Bool(bo => bo
                        .Should(te => te.Term(t => t.Field(fi => fi.Id).Value(name)), 
                                te => te.Term(t => t.Field(fi => fi.Name.Suffix("keyword")).Value(name))
                    ))
                )
            );

            return response.Documents.FirstOrDefault();
        }

        public async Task<Channel> Ensure(IPrincipal user, string name) 
        {
            var channel = new Channel(user, name, true);

            var createResult = await _client
                .IndexAsync(channel, i => i.OpType(OpType.Create));

            if (createResult.ServerError == null)
                await _chatService.AddWelcomeMessage(channel);
            
            return channel;
        }
                
        public async Task<Channel> Join(IPrincipal user, string id) 
        {
            if (id == "global")
                await Ensure(user, "Global");

            var response = await _client.SearchAsync<Channel>(m => m.Query(q => q.Term(t => t.Field(fi => fi.Id).Value(id))));

            var channel = response.Documents.FirstOrDefault();

            if (channel == null)
                return null;

            if (!channel.IsPublic) {
                if (!channel.AllowedUsers.Contains(user.UserId()))
                    return null;
            }

            var userAccount = await _userService.FindById(user.UserId());

            if (userAccount.Channels.Contains(id))
                return channel;

            userAccount.Channels.Add(id);

            await _userService.Update(userAccount);

            return channel;
        }

        public async Task<Channel> Create(IPrincipal author, string name, bool isPublic, IEnumerable<string> allowedUsers = null) 
        {
            var channel = new Channel(author, name, isPublic, allowedUsers);
            
            var originalId = channel.Id;
            var retryCount = 1;
            IndexResponse createResult;
            do
            {
                retryCount++;

                createResult = await _client
                    .IndexAsync(channel, i => i.OpType(OpType.Create));

                if (createResult.IsConflicted())
                    channel.MakeUnique(originalId, retryCount);

                if (retryCount == 100)
                    throw new UnableToCreateUniqueException();

            } while (createResult.IsConflicted() && retryCount <= 100);

            if (createResult.ServerError == null)
                 await _chatService.AddWelcomeMessage(channel);

            await _client.Indices.RefreshAsync(Indices.Index<Channel>());
            return channel;
        }

        internal async Task<IReadOnlyCollection<Channel>> GetChannels(IPrincipal user, IEnumerable<string> channelIds)
        {
            if (channelIds.Contains("global"))
                await Ensure(user, "Global");

             var response = await _client.SearchAsync<Channel>(m => m
                .Sort(sort => sort.Ascending(f => f.Name.Suffix("keyword")))
                .Query(query => query
                    .Bool(bo => bo.Must(
                        mu => mu.Terms(te => te.Field(fi => fi.Id).Terms(channelIds))
                    ))
                )
            );
             
            return response.Documents;
        }

        public async Task<IReadOnlyCollection<Sentence>> GetLatest(string channelId)
        {
            var response = await _client.SearchAsync<Sentence>(m => m.Query(q => q.Term(te => te.Field(fi => fi.ChannelId).Value(channelId))));
            return response.Documents;
        }

        public async Task<IReadOnlyCollection<Sentence>> GetFromMoniker(string channelId, string moniker)
        {
            var response = await _client.SearchAsync<Sentence>(m => m
                .Sort(sort => sort.Ascending(f => f.Moniker))
                .Query(query => query
                    .Bool(bo => bo.Must(
                        mu => mu.TermRange(r => r.Field(fi => fi.Moniker).GreaterThan(moniker)),
                        mu => mu.Term(te => te.Field(fi => fi.ChannelId).Value(channelId))
                    ))
                )
            );
             
            return response.Documents;
        }
    }
}
