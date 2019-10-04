
using Chat.Features.Users;
using Microsoft.Extensions.DependencyInjection;
using Cityline.Server;
using Cityline.Server.Model;

namespace Chat.Features.Users 
{
    public static class UserExtensions 
    {
        public static IServiceCollection AddUsersFeature(this IServiceCollection services) 
        {
            services.AddSingleton<UserService>();
            services.AddSingleton<ICitylineProducer, UserAccountProducer>();
            return services;
        }
    }
}