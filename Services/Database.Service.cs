using Raven.Client.Documents;

namespace TestRavenDB.Services;

public class DataBaseService : IDataBaseService
{
    private readonly IDocumentStore instance;

    public DataBaseService() {
        instance = new DocumentStore()
        {
            Urls = new[] {"http://127.0.0.1:8080"},
            Conventions =
            {
                MaxNumberOfRequestsPerSession = 10,
                UseOptimisticConcurrency = true
            },
            Database = "Test",
        }.Initialize();
    }

    public IDocumentStore GetStore()
    {
        return instance;
    }

}
