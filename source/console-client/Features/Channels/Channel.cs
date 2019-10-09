namespace Features.Channels 
{
    public class Channel 
    {
        public string Id { get; set;}
        public string Name { get; set; }

        public bool EnsureUnique { get; set; } = false;
    }
}