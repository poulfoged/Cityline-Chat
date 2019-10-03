export class Formatting {
    public static date(source: string) : string {
        const date = new Date(source);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;
    }

    public static shortDate(source: string) : string {
        const date = new Date(source);
        
        return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    }

    public static shortDateTime(date: Date) : string {
        const day = Formatting.pad(date.getDate().toString());
        const month = Formatting.pad((date.getMonth()+1).toString()); 
        const year = date.getFullYear();
        return `${day}/${month}/${year} ${date.getHours()}:${Formatting.pad(date.getMinutes().toString())}`;
    }

    public static shortDateNamedMonth(source: string) : string {
        const date = new Date(source);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
    }

    public static pad(source = "", wantedLength = 2, symbol = "0") {
        return source.length >= wantedLength ? source : new Array(wantedLength - source.length + 1).join(symbol) + source;
    }

    public static slugify(text)
    {
        return text.toString().toLowerCase()
            .replace(/\s+/g, "-")           // Replace spaces with -
            .replace(/[^\w\-]+/g, "")       // Remove all non-word chars
            .replace(/\-\-+/g, "-")         // Replace multiple - with single -
            .replace(/^-+/, "")             // Trim - from start of text
            .replace(/-+$/, "");            // Trim - from end of text
    }

    public static range = (lowEnd: number, highEnd: number) : number[] => {
        if (highEnd < lowEnd)
            return [];
        
        const arr = []
        let c = highEnd - lowEnd + 1;
        while ( c-- ) {
            arr[c] = highEnd--
        }
        return arr;
    }

    public static mapAny(obj: any): string[][] {
        const arr = [];

        for (const key in obj) 
            arr.push([key, obj[key]]);
        
        return arr;
    }

    public static areEqual(a1: string[], a2: string[]) {
        return a1.length === a2.length && a1.every((v,i)=> v === a2[i]);
    }

    public static capitalize(source: string) {
        return source.charAt(0).toUpperCase() + source.slice(1);
    }

    public static titleize(source: string) {
        let arr = source.split(" ");
        arr = arr.map(str => Formatting.capitalize(source));
        
        return arr.join(" ");
    }

    private static wordSplitRegex = new RegExp("[\-_\.]");
    private static uppercase = new RegExp("[A-Z]");
    private static multipleWhitespace = new RegExp("\s{2,}");
    private static titleizeRegex = new RegExp("\b([a-z])");

    
    static deslugify(source: string) : string
    {
        if (!source || source === "")
            return "";

        // all uppercase?
        if (source.toUpperCase() === source)
            source = source.toLowerCase();

        // replace symbols with spaces
        source = source.replace(Formatting.wordSplitRegex, " ");

        // replace uppercase letters with spaces, if no spaces
        if (source.trim().indexOf(" ") === -1)
            source = source.replace(Formatting.uppercase, " $0");

        // single space only
        source = source.replace(Formatting.multipleWhitespace, " ");

        // titielize (this is test -> This Is Test)
        source = source.replace(Formatting.titleizeRegex, "$0".toUpperCase());

        return source.trim();
    }

    public static nameof = <T>(name: keyof T) => name;

    public static htmlEscape(literals, ...placeholders) {
        let result = "";

        // interleave the literals with the placeholders
        for (let i = 0; i < placeholders.length; i++) {
            
            if (literals[i])
            {
                if (!literals[i].endsWith("$"))
                    result += literals[i];
                else
                    result += literals[i].substring(0, literals[i].length - 1);
            }
                

            if (placeholders[i])
                if (Array.isArray(placeholders[i]))
                    result += placeholders[i].join("");
                else if (literals[i].endsWith("$"))
                    result += placeholders[i];
                else if (placeholders[i] && placeholders[i].toLocaleLowerCase && placeholders[i].toLocaleLowerCase().indexOf("<svg") === 0)
                    result += placeholders[i];
                else if (placeholders[i] === undefined) 
                    result += "NULL";
                else if (typeof(placeholders[i]) === "number") 
                    result += placeholders[i];
                else if (typeof(placeholders[i]) === "boolean") 
                    result += placeholders[i].toString();
                else {
                    if (!placeholders[i].replace)
                        throw new Error(`Cannot replace on value ${placeholders[i]}, index ${i} type is ${typeof(placeholders[i])}`);
                    else
                        result += placeholders[i]
                            .replace(/&/g, "&amp;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#39;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;");
                }
                    
        }

        // add the last literal
        result += literals[literals.length - 1];
        return result;
    }

    static htmlDecode(text){
        const div = document.createElement("div") as HTMLDivElement;
        div.innerHTML = text;
        return div.textContent;
    }
    
    static htmlEncode(str){
        const div = document.createElement("div");
        div[("textContent" in div) ? "textContent" : "innerText"] = str;
       return div.innerHTML;
    }

    static htmlEncode2(str) {
        return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
}