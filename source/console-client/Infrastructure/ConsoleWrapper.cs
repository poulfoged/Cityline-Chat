using System.IO;
using System;

public class ConsoleWrapper 
{
    public TextWriter Out => Console.Out;
    public TextReader In => Console.In;

    public void ClearLine() 
    {
        //  int currentLineCursor = Console.CursorTop;
        //  Console.SetCursorPosition(0, currentLineCursor);
         Console.Write($"\r{new string(' ', Console.BufferWidth)}\r");
        //  Console.SetCursorPosition(0, currentLineCursor);
    }
}