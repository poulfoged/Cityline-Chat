using System;
using Nest;

namespace Chat.Features.Chat
{
    public class Sentence 
    {
        public string Text { get; set; }

        [Keyword]
        public string UserId { get; set;}

        [Keyword]
        public string Id { get; set; }

        [Keyword]
        public string ChannelId { get; set; }

        public DateTime Created { get;set;}

        // High-res sortable property
        [Keyword]
        public string Moniker { get; }

        public Sentence(string channelId) 
        {
            ChannelId = channelId;
            Created = DateTime.UtcNow;
            Moniker = $"{Created:yyyyMMddHHmmssfffffff}-{Guid.NewGuid():N}";
            Id = $"{ChannelId}-{this.Moniker}";
        }
    }
}
