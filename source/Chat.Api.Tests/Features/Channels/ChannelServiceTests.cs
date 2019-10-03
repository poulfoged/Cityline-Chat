using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Chat.Infrastructure;
using Chat.Features.Chat;
using Chat.Features.Users;
using Chat.Features.Users.Model;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Nest;

namespace Chat.Tests.Features.Channels
{
    [TestClass]
    public class ChatServiceTests
    {
        [TestMethod]
        public async Task Can_add_channel()
        {
            ////Arrange
            var user = TestExtensions.RandomUser();

            ////Act
            await new ChannelService().Create(user, "dimmer", false);

            ////Assert
            // .. no excetpison
        }

        [TestMethod]
        public async Task Can_join_channel()
        {
            ////Arrange
            var client = ElasticClientFactory.Create();
            var user = TestExtensions.RandomUser();
            await new UserService().EnsureUser(user);

            ////Act
            await new ChannelService().Join(user, "global");

            ////Assert
            await client.Indices.RefreshAsync(Indices.Index<UserAccount>());
            var userAccount = await new UserService().FindById(user.UserId());

            Assert.IsTrue(userAccount.Channels.Contains("global"));
        }

        [TestMethod]
        public async Task Can_join_private_channel()
        {
            ////Arrange
            var client = ElasticClientFactory.Create();
            var user1 = TestExtensions.RandomUser();
            var user2 = TestExtensions.RandomUser();
            await new UserService().EnsureUser(user1);
            await new UserService().EnsureUser(user2);

            ////Act
            var channel = await new ChannelService().Create(user1, "tester", false, new[] { user1.UserId(), user2.UserId()});
            await new ChannelService().Join(user1, channel.Id);

            ////Assert
            await client.Indices.RefreshAsync(Indices.Index<UserAccount>());
            var userAccount = await new UserService().FindById(user1.UserId());

            Assert.IsTrue(userAccount.Channels.Contains(channel.Id));
        }

        [TestMethod]
        public async Task Random_user_is_denied_private_channel()
        {
            ////Arrange
            var client = ElasticClientFactory.Create();
            var user1 = TestExtensions.RandomUser();
            var user2 = TestExtensions.RandomUser();
            var user3 = TestExtensions.RandomUser();
            await new UserService().EnsureUser(user1);
            await new UserService().EnsureUser(user2);
            await new UserService().EnsureUser(user3);

            ////Act
            var channel = await new ChannelService().Create(user1, "tester", false, new[] { user1.UserId(), user2.UserId()});
            await new ChannelService().Join(user3, channel.Id);

            ////Assert
            await client.Indices.RefreshAsync(Indices.Index<UserAccount>());
            var userAccount = await new UserService().FindById(user3.UserId());

            Assert.IsFalse(userAccount.Channels.Contains(channel.Id));
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
