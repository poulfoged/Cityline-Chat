using System;
using System.Collections.Generic;
using System.Security.Principal;
using Chat.Features.Users;
using Chat.Features.Users.Model;
using Nest;

namespace Chat.Features.Chat
{
    public class SentenceViewModel
    {
        public string Text { get; set; }

        [Keyword]
        public string ChannelId { get; set; }
        public string UserId { get; private set; }
        public DateTime Created { get; private set; }
        public string Username { get; private set; }

        public static SentenceViewModel Map(Sentence sentence, IDictionary<string, UserAccount> lookup) 
        {
            return new SentenceViewModel 
            {
                Text = sentence.Text,
                ChannelId = sentence.ChannelId,
                Username = lookup.ContainsKey(sentence.UserId) ? lookup[sentence.UserId].Username : null,
                UserId = sentence.UserId,
                Created = sentence.Created
            };
        }     
        
        public static Sentence Map(IPrincipal user, string channelId, SentenceViewModel sentenceViewModel) 
        {
            return new Sentence(channelId) 
            {
                UserId = user.UserId(),
                Text = sentenceViewModel.Text
            };
        }        
    }
}
