using Chat.Features.Channels;
using Chat.Infrastructure;
using Chat.Features.Users;
using Elasticsearch.Net;
using Nest;
using NestAuxilio;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;
using System;

namespace Chat.Features.Chat
{
    public class ChatService
    {
        private readonly IElasticClient _client;
        private readonly UserService _userService;

        public ChatService(IElasticClient client = null, UserService userService = null) 
        {
            _client = client ?? ElasticClientFactory.Create();
            _userService = userService ?? new UserService();
        }

        public async Task Add(IPrincipal user, Sentence sentence) 
        {
            sentence.UserId = user.UserId();
            var result = await _client.IndexAsync(sentence, m => m.Refresh(Refresh.True));
            if (result.ServerError != null)
                throw new ApplicationException("Unable to add sentence", result.OriginalException);
        }

        public async Task AddWelcomeMessage(Channel channel) 
        {
            var sentence = new Sentence(channel.Id)
            {
                UserId = "system",
                Text = $"Welcome to channel {channel.Name}"
            };
            await _client.IndexAsync(sentence, m => m.Refresh(Refresh.True));
        }

        public async Task<IDictionary<string, IReadOnlyCollection<Sentence>>> GetUserUpdate(IPrincipal user, IDictionary<string, string> monikers = null) 
        {
            monikers = monikers ?? new Dictionary<string, string>();

            var userAccount = await _userService.FindById(user.UserId());

            var channelIds = userAccount.Channels;

            if (!channelIds.Contains("global"))
                channelIds.Add("global");

            foreach(var channelId in channelIds) {
                if (monikers.ContainsKey(channelId))
                    continue;

                monikers.Add(channelId, null);
            }

            var queries = monikers.Keys
                            .Select(channelId => new SentencesViaChannel(channelId, monikers[channelId]))
                            .ToArray();

            await _client.Find(queries);

            return queries.ToDictionary(m => m.Channelid, m => m.Sentences ?? new List<Sentence>());
        }
    }
}
