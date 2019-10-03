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
    [Route("api/cityline")]
    [ApiController]
    public class CitylineController : ControllerBase
    {
        private readonly CitylineServer _citylineService;

        public CitylineController(IEnumerable<ICitylineProducer> providers) 
        {
            _citylineService = new CitylineServer(providers); 
        }

        [HttpPost]  
        public async Task StartStream(CitylineRequest request, CancellationToken cancellationToken = default(CancellationToken))
        {
            var context = new Context { RequestUrl = new Uri(Request.GetEncodedUrl()), User = User };
            Response.Headers.Add("content-type", "text/event-stream");
            await _citylineService.WriteStream(Response.Body, request, context, cancellationToken);
        } 

        
    }
}
