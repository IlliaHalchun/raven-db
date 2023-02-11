using Raven.Client.Documents;
using TestRavenDB.Database.Indexes;

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

        new ParkingAreaModels_ByParkingUrn().Execute(instance);
    }

    public IDocumentStore GetStore()
    {
        return instance;
    }

}
