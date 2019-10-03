using System;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Chat.Tests 
{
     public static class TestExtensions 
    {
        public static T WithUser<T>(this T controller, IPrincipal user) where T : ControllerBase
        {
            controller.ControllerContext = new ControllerContext
            {
                HttpContext = new DefaultHttpContext()
                {
                    User = user as ClaimsPrincipal
                }
            };

            return controller;
        }

        public static IPrincipal RandomUser() 
        {
            return new ClaimsPrincipal(new ClaimsIdentity(new[]
            {
                new Claim(ClaimTypes.NameIdentifier, Guid.NewGuid().ToString("N")),
            }, "BasicAuthentication"));
                    
        }

        // public static IUrlProvider TestUrlProvider() 
        // {
        //     return new UrlProvider(() => new Uri("http://unit-test"));
        // }


    }
}