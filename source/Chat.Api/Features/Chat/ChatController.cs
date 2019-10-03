using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Chat.Features.Chat;
using Microsoft.AspNetCore.Mvc;

namespace Chat.Controllers
{
    [Route("api/chat")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly ChatService _chatService;
        public ChatController(ChatService chatService = null) 
        {
            _chatService = chatService ?? new ChatService();
        }


        [HttpPost("{channelId}")] 
        public async Task<ActionResult> Say(string channelId, SentenceViewModel sentenceViewModel) 
        {
            var sentence = SentenceViewModel.Map(User, channelId, sentenceViewModel);
            await _chatService.Add(User, sentence);
            return Ok();
        }


        // [HttpGet("{channelId}")] 
        // public async Task<ActionResult> List(string channelId) 
        // {
        //     var sentences = await _chatService.GetLatest(channelId);

        //     var viewModels = sentences.Select(s => SentenceViewModel.Map(s));

        //     return Ok(viewModels);
        // }
    }
}
