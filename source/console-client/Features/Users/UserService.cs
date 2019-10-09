using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using City;
using Infrastructure;
using Newtonsoft.Json;

namespace Features.Users 
{
    public class UserService : ConsolePlugin
    {
        private CitylineClient _citylineClient;
        private HttpClient _httpClient;
        public UserService(ConsoleWrapper console, CitylineClient citylineClient, HttpClient httpClient) : base(console)
        {
            _citylineClient = citylineClient;
            _httpClient = httpClient;
        }

        public async Task Initialize() 
        {
            var frame = await _citylineClient.GetFrame("user-account");
            var userAccount = frame.As<UserAccount>();

            if (string.IsNullOrWhiteSpace(userAccount.Username)) 
            {       
                _out.Write("Enter a username: ");
                userAccount.Username = await _in.ReadLineAsync();

                var content = new StringContent(JsonConvert.SerializeObject(userAccount));

                content.Headers.Clear();
                content.Headers.Add("Content-Type", "application/json");
                var response = await _httpClient.PostAsync("/api/user", content);

                response.EnsureSuccessStatusCode();
            }

            _out.WriteLine($"Logged in with user {userAccount.Username}.");
        }
    }

}