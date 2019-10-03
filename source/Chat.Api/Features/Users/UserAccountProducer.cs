using Chat.Features.Users;
using Cityline;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using System;
using Chat.Features.Chat;
using Chat.Features.Users.Model;

namespace Chat.Features.Users
{
    public class UserAccountProducer : ICitylineProducer 
    {
        public string Name => "user-account";

        private readonly UserService _userService;
        private readonly ChannelService _channelService;

        public UserAccountProducer(UserService userService, ChannelService channelService) 
        {
            _userService = userService;
            _channelService = channelService;
        }

        public async Task<object> GetFrame(ITicketHolder ticketHolder, IContext context, CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!context.User.Identity.IsAuthenticated)
                return null;

            var myState = ticketHolder.GetTicket<UserState>();

            // this is our DB poll interval
            if (myState != null  &&  (DateTime.UtcNow - myState.Created).TotalSeconds < 10)
                return null;

            // find useraccount
            var useraccount = await _userService.FindById(context.User.UserId());

            if (useraccount == null)
                useraccount = UserAccount.Map(context.User);

            if (myState != null  &&  useraccount.CalculateChecksum() == myState.Checksum)
                return null;

            ticketHolder.UpdateTicket(new UserState { Created = DateTime.UtcNow, Checksum = useraccount.CalculateChecksum() });

            return UserAccountViewModel.Map(useraccount);
        }

        class UserState 
        {
            public string Checksum { get; set; }
            public DateTime Created {get; set; }
        }
    }
}