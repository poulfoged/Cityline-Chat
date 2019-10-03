using Chat.Features.Channels;
using Chat.Features.Chat;
using Chat.Features.Users;
using Chat.Features.Users.Model;
using Microsoft.Extensions.DependencyInjection;
using Nest;

namespace Chat.Infrastructure 
{
    public static class ElasticClientFactory 
    {
        public static IServiceCollection AddElastic(this IServiceCollection services) 
        {
            services.AddSingleton(_ => Create());
            return services;
        }
        public static IElasticClient Create() 
        {
            var settings = new ConnectionSettings()
                //.ThrowExceptions()
                .DisableDirectStreaming()
                .DefaultMappingFor<Channel>(m => m.IndexName("chat-channels"))
                .DefaultMappingFor<UserAccount>(m => m.IndexName("chat-users"))
                .DefaultMappingFor<Sentence>(m => m.IndexName("chat-sentences"));

            var client = new ElasticClient(settings);

            var existResponse = client.Indices.Exists(IndexName.From<Sentence>());

            if (!existResponse.Exists)
                client.Indices.Create(IndexName.From<Sentence>(), c => c
                    .Settings(m => m
                                .Analysis(a => a
                                    .Normalizers(p => p.Custom("lowercase", f => f.Filters("lowercase")))))
                    .Map<Sentence>(m => m.AutoMap<Sentence>()));

            existResponse = client.Indices.Exists(IndexName.From<UserAccount>());

            if (!existResponse.Exists)
                client.Indices.Create(IndexName.From<UserAccount>(), c => c
                     .Settings(m => m
                            .Analysis(a => a
                                .Normalizers(p => p.Custom("lowercase", f => f.Filters("lowercase")))))

                    .Map<UserAccount>(m => m.AutoMap<UserAccount>()));

             existResponse = client.Indices.Exists(IndexName.From<Channel>());

            if (!existResponse.Exists)
                client.Indices.Create(IndexName.From<Channel>(), c => c
                    .Settings(m => m
                            .Analysis(a => a
                                .Normalizers(p => p.Custom("lowercase", f => f.Filters("lowercase")))))
                    .Map<Channel>(m => m.AutoMap<Channel>()));

            return client;
        } 
    }

}