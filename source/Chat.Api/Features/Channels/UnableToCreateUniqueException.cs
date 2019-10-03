using System;
using System.Runtime.Serialization;

namespace Chat.Features.Chat
{
    [Serializable]
    internal class UnableToCreateUniqueException : Exception
    {
        public UnableToCreateUniqueException()
        {
        }

        public UnableToCreateUniqueException(string message) : base(message)
        {
        }

        public UnableToCreateUniqueException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected UnableToCreateUniqueException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}