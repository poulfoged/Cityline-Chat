using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Chat.Features.Users;
using Chat.Features.Users.Model;
using Cityline.Server;
using Cityline.Server.Model;

namespace Chat.Features.Chat
{
    public class ChatProducer : ICitylineProducer 
    {
        public string Name => "sentences";

        private readonly ChatService _chatService;   
        private readonly UserService _userService;

        public ChatProducer(ChatService chatService, UserService userService) 
        {
            _chatService = chatService;
            _userService = userService;
        }

        public async Task<object> GetFrame(ITicketHolder ticketHolder, IContext context, CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!context.User.Identity.IsAuthenticated)
                return null;

            var myState = ticketHolder.GetTicket<ChatState>();

            // this is our DB poll interval
            if (myState != null  &&  (DateTime.UtcNow - myState.Created).TotalSeconds < 1)
                return null;

            // find useraccount
            var useraccount = await _userService.FindById(context.User.UserId());

            // get orders and calculate status      
            var monikers = myState?.Monikers ?? new Dictionary<string, string>();

            var update = await _chatService.GetUserUpdate(context.User, monikers);

            foreach(var key in update.Keys) {
                if (update[key].Any())
                    monikers[key] = update[key].Max(m => m.Moniker);
            }

            ticketHolder.UpdateTicket(new ChatState { Created = DateTime.UtcNow, Monikers = monikers });

            var all = update.Keys
                        .SelectMany(key => update[key])
                        .ToList();

            var userIds = all.Select(m => m.UserId).Distinct();
            var userAccounts = await _userService.LookupUsers(userIds);
            var lookup = userAccounts.ToDictionary(m => m.Id, m => m) as IDictionary<string, UserAccount>;

            return all
                .Select(sentence => SentenceViewModel.Map(sentence, lookup))
                .ToList();
        }

        class ChatState 
        {
            public IDictionary<string, string> Monikers { get; set; }
            public DateTime Created {get; set; }
        }
    }
}