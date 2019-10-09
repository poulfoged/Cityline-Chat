using System.IO;

namespace Infrastructure
{
    public abstract class ConsolePlugin
    {
        protected readonly TextReader _in;

        protected readonly TextWriter _out;

        protected readonly ConsoleWrapper _console;

        public ConsolePlugin(ConsoleWrapper console)
        {
            _in = console.In;
            _out = console.Out;
            _console = console;
        }
    }
}