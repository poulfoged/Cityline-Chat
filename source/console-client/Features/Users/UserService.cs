using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Cityline.Client;
using Infrastructure;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

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

        public static string EnsureDeviceId() 
        {
            UserAccount tempAccount;
            var file = new FileInfo("user-info.json");
            if (file.Exists) 
            {
                using (var fileStream = file.OpenRead()) 
                using (var reader = new StreamReader(fileStream))
                using (var jsonReader = new JsonTextReader(reader))
                {
                    tempAccount = new JsonSerializer().Deserialize<UserAccount>(jsonReader);
                }

                return tempAccount.DeviceId;
            }

            tempAccount = new UserAccount { DeviceId = Guid.NewGuid().ToString("N") };

                using (var fileStream = file.OpenWrite()) 
                using (var reader = new StreamWriter(fileStream))
                using (var jsonReader = new JsonTextWriter(reader))
                {
                    new JsonSerializer() { ContractResolver = new CamelCasePropertyNamesContractResolver() }.Serialize(jsonReader, tempAccount);
                }

                return tempAccount.DeviceId;
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