using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Chat.Features.Chat;
using Chat.Features.Users;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Chat.Tests.Features.Chat
{
    [TestClass]
    public class ChatServiceTests
    {
        [TestMethod]
        public async Task Can_add_sentence()
        {
            var sentence = new Sentence(Guid.NewGuid().ToString());

            await new ChatService().Add(TestExtensions.RandomUser(), sentence);
        }

        [TestMethod]
        public async Task Can_get_sentences()
        {
            var user = TestExtensions.RandomUser();
            await new UserService().EnsureUser(user);

            var channelId = Guid.NewGuid().ToString("N");
            var service = new ChatService();
            await service.Add(user, new Sentence(channelId) {  Text = "hello 1" });
            await service.Add(user, new Sentence(channelId) {  Text = "hello 2" });
            await service.Add(user, new Sentence(channelId) {  Text = "hello 3" });
            await service.Add(user, new Sentence(channelId) {  Text = "hello 4" });

            var window = await service.GetUserUpdate(user, new Dictionary<string, string> {{ channelId, null }});

            Assert.AreEqual(window[channelId].Count, 4);
        }
    }
}
