using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using City;
using Features.Channels;
using Infrastructure;
using Newtonsoft.Json;

namespace Features.Chat
{
    public class ChatService : ConsolePlugin
    {
        private CitylineClient _citylineClient;
        private HttpClient _httpClient;
        private readonly ChannelService _channelService;
        public ChatService(ConsoleWrapper console, CitylineClient citylineClient, HttpClient httpClient, ChannelService channelService) : base(console)
        {
            _citylineClient = citylineClient;
            _citylineClient.Subscribe("sentences", SentenceHandler);
            _httpClient = httpClient;
            _channelService = channelService;
        }
        
        private IDictionary<string, List<Sentence>> _sentences = new Dictionary<string, List<Sentence>>();

        private void SentenceHandler(Frame frame)
        {
            if (string.IsNullOrWhiteSpace(frame.Data))
                return;

            var sentences = frame.As<Sentence[]>(); 

            foreach (var sentence in sentences) {

                // if (!_sentences.ContainsKey(sentence.ChannelId))
                //     _sentences.Add(sentence.ChannelId, new List<Sentence>());

                // _sentences[sentence.ChannelId].Add(sentence);

                // if (sentence.ChannelId == this._channelId)
                    Render(sentence);
            }
        }

        private void Render(Sentence sentence) 
        {
            _console.ClearLine();
            _out.WriteLine($"{sentence.ChannelId}>  {sentence.Username ?? sentence.UserId}: {sentence.Text}");
            _channelService.Ready();
        }

        // public void ChangeChannel(string channelId) 
        // {
        //     _channelId = channelId;
    
        //     if (_sentences.ContainsKey(channelId))
        //         _sentences[channelId].ForEach(sentence => Render(sentence));
        // }

        public async Task Parse(string line)
        {
            if (line[0] == '/')
                return;

            var sentence = new Sentence {
                Text = line
            };
            var content = new StringContent(JsonConvert.SerializeObject(sentence));

            content.Headers.Clear();
            content.Headers.Add("Content-Type", "application/json");
            var response = await _httpClient.PostAsync($"/api/chat/{_channelService.CurrentChannel}", content);

            response.EnsureSuccessStatusCode();
        }

        
    }
}