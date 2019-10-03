
using Chat.Features.Users;
using Cityline;
using Microsoft.Extensions.DependencyInjection;

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