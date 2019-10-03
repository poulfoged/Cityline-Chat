using System.Collections.Generic;
using Chat.Features.Chat;
using Nest;
using NestAuxilio;

class SentencesViaChannel : IAuxilioQuery
{
    private readonly string _moniker;
    private readonly string _channelId;
    private readonly string _key;

    public string Channelid => _channelId;

    public SentencesViaChannel(string channelId, string moniker) 
    {
        _moniker = moniker;
        _channelId = channelId;
        _key = $"{typeof(SentencesViaChannel)}-{moniker}-{channelId}";
    }

    public IReadOnlyCollection<Sentence> Sentences { get; private set; }

    public void Build(MultiSearchDescriptor descriptor)
    {
        descriptor.Search<Sentence>(_key, m => m
            .Sort(sort => sort.Ascending(f => f.Moniker))
            .Size(1000)
            .Query(query => query
                .Bool(bo => bo.Must(
                    mu => mu.TermRange(r => r.Field(fi => fi.Moniker).GreaterThan(_moniker)),
                    mu => mu.Term(te => te.Field(fi => fi.ChannelId).Value(_channelId))
                ))
            )
        );
    }

    public void Extract(MultiSearchResponse multiSearchResponse)
    {
        var response = multiSearchResponse.GetResponse<Sentence>(_key);

        if (response.IsValid)
            this.Sentences = response.Documents;
    }
}
