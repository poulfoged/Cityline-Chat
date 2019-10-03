using System;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;
using Chat.Infrastructure;
using Nest;
using Chat.Features.Users.Model;
using System.Security.Claims;
using System.Collections.Generic;

namespace Chat.Features.Users
{
    public class UserService
    {
        private readonly IElasticClient _client;

        public UserService(IElasticClient client = null) {
            _client = client ?? ElasticClientFactory.Create();
        }

        public async Task<UserAccount> EnsureUser(Guid deviceId) 
        {
            var userAccount = await FindByDeviceId(deviceId);
            if (userAccount != null)
                return userAccount;

            userAccount = new UserAccount { DeviceId = deviceId };
           
            await AddUser(userAccount);
            return userAccount;
        }

        internal async Task Change(ClaimsPrincipal user, string username)
        {
            var userAccount = await EnsureUser(user);
            
            userAccount.Username = username;
            await AddUser(userAccount);
        }

        public async Task<UserAccount> EnsureUser(IPrincipal user)
        {
            var userAccount = await FindById(user.UserId());
            if (userAccount != null)
                return userAccount;

            userAccount = new UserAccount { Id = user.UserId() };
            await AddUser(userAccount);

            await _client.Indices.RefreshAsync(Indices.Index<UserAccount>());
            
            return userAccount; 
        }

        public async Task AddUser(UserAccount account)
        {
            await _client.IndexDocumentAsync(account);
        }

        public async Task<UserAccount> FindByDeviceId(Guid deviceId)
        {
             var response = await _client.SearchAsync<UserAccount>(m => m.Query(q => q.Term(te => te.Field(fi => fi.DeviceId).Value(deviceId))));
            return response.Documents.FirstOrDefault();
        }

        internal async Task Update(UserAccount userAccount)
        {
            await _client.IndexDocumentAsync(userAccount);
        }

        internal async Task<IReadOnlyCollection<UserAccount>> LookupUsers(IEnumerable<string> userIds)
        {
            var response = await _client.SearchAsync<UserAccount>(m => m.Query(q => q.Terms(te => te.Field(fi => fi.Id).Terms(userIds))));
            return response.Documents;
        }

        public async Task<UserAccount> FindById(string id)
        {
             var response = await _client.SearchAsync<UserAccount>(m => m.Query(q => q.Term(te => te.Field(fi => fi.Id).Value(id))));
            return response.Documents.FirstOrDefault();
        }
    }
}