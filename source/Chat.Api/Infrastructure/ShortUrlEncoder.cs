using System.Collections.Generic;
using System.Linq;

namespace Chat.Infrastructure 
{
    public class ShortUrlEncoder
    {
        private static char[] map =
        {
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K',
            'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
            'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'x', 'y', 'z', '2', '3', '4',
        };

        public string Encode(long source)
        {
            return Encode(source, map);
        }

        string Encode(long inp, IEnumerable<char> map)
        {

            var b = map.Count();
            // value -> character
            var toChar = map.Select((v, i) => new { Value = v, Index = i }).ToDictionary(i => i.Index, i => i.Value);
            var res = "";
            if (inp == 0)
            {
                return "" + toChar[0];
            }
            while (inp > 0)
            {
                // encoded least-to-most significant
                var val = (int)(inp % b);
                inp = inp / b;
                res += toChar[val];
            }
            return res;
        }

        long Decode(string encoded, IEnumerable<char> map)
        {
            var b = map.Count();
            // character -> value
            var toVal = map.Select((v, i) => new { Value = v, Index = i }).ToDictionary(i => i.Value, i => i.Index);
            long res = 0;
            // go in reverse to mirror encoding
            for (var i = encoded.Length - 1; i >= 0; i--)
            {
                var ch = encoded[i];
                var val = toVal[ch];
                res = (res * b) + val;
            }
            return res;
        }
    }
}