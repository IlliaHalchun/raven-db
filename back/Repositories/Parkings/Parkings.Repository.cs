using TestRavenDB.Services;
using TestRavenDB.Models;
using Raven.Client.Documents;
using TestRavenDB.Database.Indexes;
using Raven.Client.Documents.Operations;

namespace TestRavenDB.Repositories;

public class ParkingsRepository: IParkingsRepository {

    private readonly IDataBaseService database;

    public ParkingsRepository(IDataBaseService database) 
    {
        this.database = database;
    }

    public async Task<ParkingModel?> GetByUrnAsync(string urn)
    {
        using (var session = database.GetStore().OpenAsyncSession() )
        {
            var result = await session.LoadAsync<ParkingModel>(urn);
            return result;
        }
    }

    public async Task<IEnumerable<ParkingModel>> GetAllAsync()
    {
        using (var session = database.GetStore().OpenAsyncSession() )
        {
        ParkingModel[] result = (await session
            .Advanced
            .LoadStartingWithAsync<ParkingModel>("urn:api_v1_parkings", null))
            .ToArray();
            return result;
        }
    }

    public async Task<ParkingModel?> CreateAsync(ParkingModel model)
    {
         using (var session = database.GetStore().OpenAsyncSession() )
        {
            try {
                await session.StoreAsync(model, model.Urn);
                await session.SaveChangesAsync();
                return model;
            } catch {
                return null;
            }
        }
    }

    public async Task<ParkingModel?> DeleteByUrnAsync(string urn)
    {
        using (var session = database.GetStore().OpenAsyncSession())
        {
            var deleted = await session.LoadAsync<ParkingModel>(urn);
            if(deleted is null) return null;
            session.Delete(urn);

            var store = this.database.GetStore();
            var operation = await store
                .Operations
                .SendAsync(
                    new DeleteByQueryOperation<ParkingAreaModels_ByParkingUrn.Result, ParkingAreaModels_ByParkingUrn>(
                        parkingArea => parkingArea.ParkingUrn == urn
                    )
                );
            
            await operation.WaitForCompletionAsync(TimeSpan.FromSeconds(15));

            await session.SaveChangesAsync();
            return deleted;
        }
    }
}
