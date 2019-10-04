using Chat.Features.Users;
using Cityline.Server;
using Cityline.Server.Model;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using System;
using Chat.Features.Chat;

namespace Chat.Features.Channels
{
    public class ChannelProducer : ICitylineProducer 
    {
        public string Name => "channels";

        private readonly UserService _userService;
        private readonly ChannelService _channelService;

        public ChannelProducer(UserService userService, ChannelService channelService) 
        {
            _userService = userService;
            _channelService = channelService;
        }

        public async Task<object> GetFrame(ITicketHolder ticketHolder, IContext context, CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!context.User.Identity.IsAuthenticated)
                return null;

            var myState = ticketHolder.GetTicket<ChannelState>();

            // this is our DB poll interval
            if (myState != null  &&  (DateTime.UtcNow - myState.Created).TotalSeconds < 1)
                return null;

            // find useraccount
            var useraccount = await _userService.FindById(context.User.UserId());
  
            if (!useraccount.Channels.Contains("global"))
                useraccount.Channels.Add("global");

            string checksum;
            using (var md5 = MD5.Create())
                checksum = new Guid(md5.ComputeHash(Encoding.UTF8.GetBytes(string.Join(", ", useraccount.Channels)))).ToString("N");

            if (myState != null && myState.Checksum == checksum)
                return null;

            ticketHolder.UpdateTicket(new ChannelState { Created = DateTime.UtcNow, Checksum = checksum });

            return await _channelService.GetChannels(context.User, useraccount.Channels);
        }

        class ChannelState 
        {
            public string Checksum { get; set; }
            public DateTime Created {get; set; }
        }
    }
}