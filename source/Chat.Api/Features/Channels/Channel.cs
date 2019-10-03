using System;
using System.Collections.Generic;
using System.Security.Principal;
using Chat.Infrastructure;
using Chat.Features.Users;
using Nest;
using Newtonsoft.Json;

namespace Chat.Features.Channels 
{
    public class Channel 
    {
        public Channel(IPrincipal user, string name, bool isPublic, IEnumerable<string> allowedUsers = null) 
        {
            Id = name.Slugify();
            IsPublic = isPublic;
            Name = name;
            Created = DateTime.UtcNow;
            UserId = user.UserId();

            AllowedUsers = new HashSet<string>(allowedUsers ?? new string[0]);

            if (!AllowedUsers.Contains(UserId))
                AllowedUsers.Add(UserId);
        }

        [Keyword(Normalizer = "lowercase")]
        public string Id {get;set;}

        public string Name { get;set; }

        public DateTime Created { get; set; }
        
        [Keyword(Normalizer = "lowercase")]
        public string UserId { get; private set; }
        public bool IsPublic { get; set; }

        [Keyword]
        [JsonProperty(DefaultValueHandling = DefaultValueHandling.Ignore)]
        public ISet<string> AllowedUsers { get; private set; } = new HashSet<string>();

        public void MakeUnique(string originalId, int retryCount)
        {
            Id = $"{originalId}-{retryCount}";
        }

    }
}