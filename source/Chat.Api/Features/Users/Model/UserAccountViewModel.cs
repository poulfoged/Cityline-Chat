namespace Chat.Features.Users.Model
{
    public class UserAccountViewModel
    {
        public string Id { get; set; }
        public string Username { get; set; }

        public static UserAccountViewModel Map(UserAccount userAccount)
        {
            return new UserAccountViewModel 
            {
                Id = userAccount.Id,
                Username = userAccount.Username
            };
        }
    }
}