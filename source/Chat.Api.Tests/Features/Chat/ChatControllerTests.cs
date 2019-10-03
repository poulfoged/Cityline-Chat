using System;
using System.Threading.Tasks;
using Chat.Controllers;
using Chat.Features.Chat;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Chat.Tests.Features.Chat
{
    [TestClass]
    public class ChatControllerTests
    {
        [TestMethod]
        public async Task Can_add_sentence()
        {
            var user = TestExtensions.RandomUser();
            var controller = new ChatController().WithUser(user);

            await Task.Delay(0);
        }
    }
}
