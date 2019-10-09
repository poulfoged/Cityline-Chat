using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Cityline.Client;
using Features.Chat;
using Infrastructure;
using Newtonsoft.Json;

namespace Features.Channels
{
    public class ChannelService : ConsolePlugin
    {
        private CitylineClient _citylineClient;
        private HttpClient _httpClient;
        public ChannelService(ConsoleWrapper console, CitylineClient citylineClient, HttpClient httpClient) : base(console)
        {
            _citylineClient = citylineClient;
            _citylineClient.Subscribe("channels", ChannelsHandler);
            _httpClient = httpClient;
        }
        private string _currentChannel = "global";

        private ISet<Channel> _channels = new HashSet<Channel>();

        public string CurrentChannel { get { return _currentChannel; } }

        private void ChannelsHandler(Frame frame)
        {
            if (string.IsNullOrWhiteSpace(frame.Data))
                return;

            var channels = frame.As<Channel[]>(); 

            foreach (var channel in channels) {

                if (!_channels.Any(c => c.Id == channel.Id))
                    _channels.Add(channel);
            }

            Render(_channels);
        }

        private void Render(IEnumerable<Channel> channels) 
        {
            _console.ClearLine();
            _out.WriteLine($"Joined channels {string.Join(", ", channels.Select(c => c.Name))}");
            Ready();
        }

        public void ChangeChannel(string channelId) 
        {
            _currentChannel = channelId;
        }

        public void ShowUsage() 
        {
            _console.ClearLine();
            _out.WriteLine("/channel [join | leave | create] channel-name");
            Ready();
            
        }

        public async Task Join(string name) 
        {

            var content = new StringContent(JsonConvert.SerializeObject(new Channel { Name = name }));

            content.Headers.Clear();
            content.Headers.Add("Content-Type", "application/json");
            var response = await _httpClient.PostAsync($"/api/channel", content);

            response.EnsureSuccessStatusCode();

            var channel = JsonConvert.DeserializeObject<Channel>(await response.Content.ReadAsStringAsync());

            _currentChannel = channel.Id;
        }

        public async Task Parse(string line)
        {
            if (!line.StartsWith("/channel"))
                return;

            var parts = line.Split(' ');

            if (parts.Length != 3) 
            {
                ShowUsage();
                return;
            }

            var name = parts[2];

            switch(parts[1]) 
            {
                case "join":
                    _console.ClearLine();
                    _out.WriteLine($"Joining channel {name} ...");
                    await Join(name);
                    Ready();
                    break;
                    
                default: 
                    ShowUsage();
                    break;
            }


            

            // var sentence = new Sentence {
            //     Text = line
            // };
            // var content = new StringContent(JsonConvert.SerializeObject(sentence));

            // content.Headers.Clear();
            // content.Headers.Add("Content-Type", "application/json");
            // var response = await _httpClient.PostAsync($"/api/chat/{_channelId}", content);

            // response.EnsureSuccessStatusCode();
        }

        internal void Ready()
        {
            _console.ClearLine();
            _out.Write($"{this._currentChannel}> ");
        }
    }
}