using Chat.Features.Users.Model;
using Chat.Features.Users;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Chat.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        public UserController(UserService userService = null) 
        {
            _userService = userService ?? new UserService();
        }

        [HttpPost] 
        public async Task<ActionResult> Change(UserAccountViewModel viewModel) 
        {
            await _userService.Change(User, viewModel.Username);
            return Ok();
        }
    }
}
