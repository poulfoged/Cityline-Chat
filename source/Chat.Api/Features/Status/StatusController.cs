using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Chat.Features.Chat;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Cityline.Server;
using Cityline.Server.Model;

namespace Chat.Controllers
{
    [Route("")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        [HttpGet]  
        public string GetStatus()
        {
            return "You are awesome!";
        } 
    }
}
