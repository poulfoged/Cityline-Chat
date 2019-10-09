using City;
using System.Net.Http;
using System.Threading.Tasks;
using System;
using Features.Users;
using Features.Chat;
using System.Net;
using Features.Channels;

namespace console_client
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var console = new ConsoleWrapper();
            string deviceId = new Guid("6d68f096-08e3-485f-83d2-28ef66a5c854").ToString("N");

            //Console.Write("\r" + new string(' ', Console.WindowWidth) + "\r");
            Console.WriteLine(" ");
            Console.Write(new string('=', Console.WindowWidth));
            Console.WriteLine("Chat Demo");
            Console.Write(new string('=', Console.WindowWidth));
            Console.WriteLine(" ");

            Uri url = new Uri("https://chat.devchamp.com");
            if (args.Length == 0 || !Uri.TryCreate(args[0], UriKind.Absolute, out url))
                Console.WriteLine($"No server url supplied, using default {url}.");

            var handler = new HttpClientHandler
            {
                ClientCertificateOptions = ClientCertificateOption.Manual,
                ServerCertificateCustomValidationCallback = (httpRequestMessage, cert, cetChain, policyErrors) => { return true; }
            };

            var httpClient = new HttpClient(handler) { BaseAddress = url };
            httpClient.DefaultRequestHeaders.Add("device-id", deviceId);

            var citylineClient = CitylineFactory.Create(new Uri(url, "/api/cityline"), deviceId);

            var userService = new UserService(console, citylineClient, httpClient);
            var channelService = new ChannelService(console, citylineClient, httpClient);
            var chatService = new ChatService(console, citylineClient, httpClient, channelService);
            

            var _ = Task.Run(async () => await citylineClient.StartListening());

            await userService.Initialize();


            var __ = Task.Run(async () => {
                console.ClearLine();
                await citylineClient.GetFrame("sentences");
                await citylineClient.GetFrame("user-account");
                await citylineClient.GetFrame("channels");
                Console.WriteLine("Type /channel for channel-commands. /quit to quit.");
                channelService.Ready();
            });

            // a bug in readlinasync blocks everything, so we must spin up a task to avoid that
            await Task.Run(async () => {
                while (true)
                {
                    var line = await Console.In.ReadLineAsync();
                    await chatService.Parse(line);
                    await channelService.Parse(line);

                    if (line == "/quit")
                        break;
                }
            });
        }
    }
}
