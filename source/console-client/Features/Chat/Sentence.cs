using System;

namespace Features.Chat
{
    public class Sentence
    {
        public string Text { get; set; }

        public string ChannelId { get; set; }
        public string UserId { get; set; }
        public DateTime Created { get; set; }
        public string Username { get; set; }

    }
}