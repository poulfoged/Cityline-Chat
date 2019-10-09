using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Chat.Features.Chat;
using Microsoft.AspNetCore.Mvc;

namespace Chat.Features.Channels
{
    [Route("api/channel")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly ChannelService _channelService;
        public ChatController(ChannelService channelService = null) 
        {
            _channelService = channelService ?? new ChannelService();
        }


        [HttpPost] 
        public async Task<ActionResult> EnsureAndJoin(ChannelViewModel channelViewModel) 
        {
            Channel channel = null;
            if (!channelViewModel.EnsureUnique)
                channel = await _channelService.FindChannel(User, channelViewModel.Name);

            if (channel == null)
                channel = await _channelService.Create(User, channelViewModel.Name, channelViewModel.IsPublic, channelViewModel.AllowedUsers);

            if (channel != null)
                await _channelService.Join(User, channel.Id);

            return Ok(channel);
        }


        [HttpPost("{channelId}")] 
        public async Task<ActionResult> Join(string channelId) 
        {
            var channel = await _channelService.Join(User, channelId);

            return Ok(channel);
        }
    }
}
