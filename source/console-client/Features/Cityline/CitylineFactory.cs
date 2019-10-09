using System;
using System.Net.Http;
using System.Threading.Tasks;
using City;

public class CitylineFactory 
{
    public static CitylineClient Create(Uri serverUrl, string deviceId) 
    {
        var handler = new HttpClientHandler
        {
            ClientCertificateOptions = ClientCertificateOption.Manual,
            ServerCertificateCustomValidationCallback = (httpRequestMessage, cert, cetChain, policyErrors) => { return true; }
        };

        var citylineClient = new CitylineClient(serverUrl, () => new HttpClient(handler), m =>
        {
            m.Headers.Add("device-id", deviceId);
        });

        return citylineClient;
    }
}