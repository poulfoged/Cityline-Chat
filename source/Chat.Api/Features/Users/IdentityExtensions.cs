using System;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;


namespace Chat.Features.Users 
{
    public static class IdentityExtensions 
    {
        public static string UserId(this IPrincipal principal) 
        {
            if (principal.Identity.AuthenticationType == "BasicAuthentication") {
                var claimsPrincipal = principal as ClaimsPrincipal;

                if (claimsPrincipal == null)
                    throw new ApplicationException("Expected principal to be ClaimsPrincipal");

                var claim = claimsPrincipal.Claims.FirstOrDefault(m => m.Type == ClaimTypes.NameIdentifier);

                if (claim == null)
                    throw new ApplicationException("No NameIdentifier claim");

                return claim.Value;
            }

            throw new ApplicationException("Invalid AuthenticationType");
        } 
    }
}