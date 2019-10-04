// using System;
// using System.IO;
// using System.Linq;
// using System.Threading;
// using System.Net.Http;
// using System.Collections.Generic;
// using System.Net;
// using System.Threading.Tasks;
// using System.Text;
// using System.Diagnostics;

// namespace Cityline
// {
//     public class CitylineClient
//     {
//         private Uri _serverUrl;
//         private IDictionary<string, Frame> _frames = new Dictionary<string, Frame>();
//         private IDictionary<string, string> _idCache = new Dictionary<string, string>();

//         public event EventHandler<CitylineEventArgs> FrameReceived;
//         public CitylineClient(Uri serverUrl)
//         {
//             this._serverUrl = serverUrl;
//         }

//         public async Task StartListening()
//         {
//             var buffer = new Buffer();


//             using (HttpClient httpClient = new HttpClient())
//             {
//                 httpClient.Timeout = TimeSpan.FromMilliseconds(Timeout.Infinite);

//                 var message = new HttpRequestMessage(HttpMethod.Post, this._serverUrl);
//                 message.Content = new System.Net.Http.StringContent("{ tickets: {} }", Encoding.UTF8, "application/json");
//                 var response = await httpClient.SendAsync(message, HttpCompletionOption.ResponseHeadersRead);
//                 var stream = await response.Content.ReadAsStreamAsync();

//                 //var stream = httpClient.GetStreamAsync(this._serverUrl).Result;

//                 using (var reader = new StreamReader(stream))
//                 {
//                     while (!reader.EndOfStream)
//                     {
//                         buffer.Add(reader.ReadLine());

//                         while (buffer.HasTerminator())
//                         {
//                             var chunk = buffer.Take();
//                             var frame = ParseFrame(chunk);
//                             this.AddFrame(frame);
//                         }
//                     }
//                 }
//             }
//         }

//         private void AddFrame(Frame frame)
//         {
//             if (frame != null && !string.IsNullOrEmpty(frame.EventName))
//             {
//                 if (!string.IsNullOrEmpty(frame.Id))
//                     this._idCache[frame.EventName] = frame.Id;

//                 this._frames[frame.EventName] = frame;
//                 FrameReceived.Invoke(this, new CitylineEventArgs(frame.EventName, frame.Data));
//             }
//         }

//         private Frame ParseFrame(IEnumerable<string> lines)
//         {
//             var result = new Frame();
//             lines.ToList().ForEach(line =>
//             {
//                 var parts = line.Split(": ");
//                 if (parts.Count() != 2)
//                     return;

//                 switch (parts[0])
//                 {
//                     case "data":
//                         result.Data = parts[1].Trim();
//                         break;
//                     case "id":
//                         result.Id = parts[1].Trim();
//                         break;
//                     case "event":
//                         result.EventName = parts[1].Trim();
//                         break;

//                 }
//             });
//             return result;
//         }

//     }

//     class Buffer
//     {
//         private List<string> _buffer = new List<string>();

//         public void Add(string chunk)
//         {
//             this._buffer.AddRange(chunk.Split("\n")); ;
//         }

//         public bool HasTerminator()
//         {
//             return this._buffer.IndexOf("") != -1;
//         }

//         public IEnumerable<string> Take()
//         {
//             var position = this._buffer.IndexOf("");
//             var chunk = this._buffer.Take(position);
//             this._buffer = this._buffer.Skip(position + 1).ToList();
//             return chunk;
//         }

//         public void Clear()
//         {
//             this._buffer.Clear();
//         }
//     }

//     class Frame
//     {
//         public string Id { get; set; }
//         public string EventName { get; set; }
//         public string Data { get; set; }
//     }

//     public class CitylineEventArgs : EventArgs
//     {
//         public string EventName { get; }

//         public string Data { get; }

//         public CitylineEventArgs(string eventName, string data)
//         {
//             this.EventName = eventName;
//             this.Data = data;
//         }

//         // public As<T>() {
//         //     return JsonConvert.Deserialize
//         // }
//     }
// }
