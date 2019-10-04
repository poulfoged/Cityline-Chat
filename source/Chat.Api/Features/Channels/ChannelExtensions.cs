
using Chat.Features.Channels;
using Chat.Features.Chat;
using Cityline.Server;
using Cityline.Server.Model;
using Microsoft.Extensions.DependencyInjection;

namespace Chat.Features.Channels 
{
    public static class ChannelExtensions 
    {
        public static IServiceCollection AddChannelFeature(this IServiceCollection services) 
        {
            services.AddSingleton<ChannelService>();
            services.AddSingleton<ICitylineProducer, ChannelProducer>();
            return services;
        }
    }
}