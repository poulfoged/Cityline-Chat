using System;
using System.Collections.Generic;
using System.Security.Principal;
using Chat.Infrastructure;
using Chat.Features.Users;
using Nest;
using Newtonsoft.Json;

namespace Chat.Features.Channels 
{
    public class ChannelViewModel
    {
        public string Name { get;set; }

        public bool IsPublic { get; set; }

        public ISet<string> AllowedUsers { get; private set; } = new HashSet<string>();

        public bool EnsureUnique { get;set;} = true;
    }
}