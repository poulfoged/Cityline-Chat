using System;
using System.Collections.Generic;
using System.Security.Principal;
using Nest;
using Newtonsoft.Json;

namespace Chat.Features.Users.Model
{
    public class UserAccount
    {
        public UserAccount()
        {
            Id = Guid.NewGuid().ToString("N");
            Created = DateTime.UtcNow; 
        }

        [Keyword]
        [JsonProperty(DefaultValueHandling = DefaultValueHandling.Ignore)]
        public ISet<string> Channels { get; private set; } = new HashSet<string>();

        [Keyword]
        public string Id { get; set; }

        [Keyword]
        public string Username { get; set; }

        [Keyword]
        public Guid DeviceId { get; set; }
        public DateTime Created { get; set;}

        internal string CalculateChecksum()
        {
            return Username;
        }

        public static UserAccount Map(IPrincipal user) 
        {
            return new UserAccount 
            {
                Id = user.UserId()
            };
        }
    }
}