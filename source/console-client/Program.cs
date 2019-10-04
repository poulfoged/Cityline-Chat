using System;
using System.IO;
using System.Linq;
using System.Threading;
using System.Net.Http;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using System.Text;
using System.Diagnostics;

namespace console_client
{
    class Program
    {
        static void Main(string[] args)
        {
            // ignore ssl errors
            ServicePointManager.ServerCertificateValidationCallback += (sender, cert, chain, sslPolicyErrors) => true;

            Uri url;
            if (args.Length == 0 || !Uri.TryCreate(args[0], UriKind.Absolute, out url)) {
                Console.WriteLine("Please provide url");
                return;
            }
                
            var client = new CitylineClient(url);

            void HandleRecievedFrame(object sender, CitylineEventArgs a)
            {
                Console.WriteLine(a.EventName + " " + a.Data);
            }

            client.FrameReceived += HandleRecievedFrame;

            Console.WriteLine("Hello World!");
            Console.ReadLine();
        }
    }
}
