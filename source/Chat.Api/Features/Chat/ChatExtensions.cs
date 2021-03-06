using Chat.Features.Chat;
using Cityline.Server;
using Cityline.Server.Model;
using Microsoft.Extensions.DependencyInjection;

namespace Chat.Features.Chat 
{
    public static class ChatExtensions 
    {
        public static IServiceCollection AddChatFeature(this IServiceCollection services) 
        {
            services.AddSingleton<ChatService>();
            services.AddSingleton<ICitylineProducer, ChatProducer>();
            return services;
        }
    }
}