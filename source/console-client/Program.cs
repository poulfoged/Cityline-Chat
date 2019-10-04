using Cityline.Client;
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

namespace console_client
{
    class Program
    {
        static void Main(string[] args)
        {
            Uri url;
            if (args.Length == 0 || !Uri.TryCreate(args[0], UriKind.Absolute, out url)) {
                Console.WriteLine("Please provide url");
                return;
            }
                
            var client = new CitylineClient(url);

            client.Subscribe("ping", (e) => { Console.WriteLine("ping"); });
            Console.WriteLine("Hello World!");
            Console.ReadLine();
        }
    }
}
