using City;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using System;
using Terminal.Gui;

namespace console_client
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("Chat Demo");

            Uri url = new Uri("https://chat.devchamp.com/api/cityline");
            if (args.Length == 0 || !Uri.TryCreate(args[0], UriKind.Absolute, out url)) {
                Console.WriteLine($"No server url supplied, using default {url}.");
            }
                
            var client = new CitylineClient(url, null, m => {
                m.Headers.Add("device-id", Guid.NewGuid().ToString("N"));
            });

            client.Subscribe("ping", (e) => { Console.WriteLine("ping"); });
            client.Subscribe("user-accoount", (e) => { Console.WriteLine("user-account"); });
            client.Subscribe("chat", (e) => { Console.WriteLine("chat"); });
            await client.StartListening();
            Console.WriteLine("Hello World!");
            Console.ReadLine();
        }
    }
}
