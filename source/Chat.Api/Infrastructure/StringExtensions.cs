using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace Chat.Infrastructure 
{
    public static class StringExtensions 
    {
        private static readonly Random random = new Random();
        private static readonly Regex slugRegex = new Regex(@"[^a-z0-9]+", RegexOptions.Compiled | RegexOptions.IgnoreCase);
        private static readonly string[] ReservedSlugs = { "inbox", "trash", "trashcan", "feed" };
        public static string Slugify(this string source, bool lowerCase = true, bool fallbackToRandom = true)
        {
            source = source ?? "";

            if (lowerCase)
                source = source.ToLowerInvariant();

            source = slugRegex.Replace(source, "-");
            source = source.Trim('-');

            if (ReservedSlugs.Contains(source))
                source = "";

            if (source.Length > 100)
                source = source.Substring(0, 100);

            source = source.Trim('-');

            if (source.Length == 0 && fallbackToRandom)
            {
                return new ShortUrlEncoder().Encode(random.Next()).Slugify(lowerCase);
            }
            return source;
        }
    }

}