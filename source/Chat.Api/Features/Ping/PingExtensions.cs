using Microsoft.Extensions.DependencyInjection;
using Cityline.Server;
using Cityline.Server.Model;

namespace Chat.Features.Ping 
{
    public static class PingExtensions 
    {
        public static IServiceCollection AddPingFeature(this IServiceCollection services) 
        {
            services.AddSingleton<ICitylineProducer, PingProducer>();
            return services;
        }
    }
}