using Nest;

namespace Chat.Infrastructure 
{
    public static class ElasticExtensions 
    {
        public static bool IsConflicted(this IndexResponse response)
        {
            return response?.ServerError != null && response.ServerError.Status == 409;
        }
    }
}