using TestRavenDB.Services;
using TestRavenDB.Models;

namespace TestRavenDB.Repositories;

public class ParkingAreasRepository : IParkingAreasRepository
{
    private readonly IDataBaseService database;

    public ParkingAreasRepository(IDataBaseService database)
    {
        this.database = database;
    }

    public async Task<ParkingAreaModel?> CreateAsync(ParkingAreaModel model)
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

    public async Task<ParkingAreaModel?> GetByUrnAsync(string urn)
    {
        using (var session = database.GetStore().OpenAsyncSession() )
        {
            var result = await session.LoadAsync<ParkingAreaModel>(urn);

            return result;
        }
    }

    public async Task<ParkingAreaModel?> DeleteByUrnAsync(string urn)
    {
        using (var session = database.GetStore().OpenAsyncSession())
        {
            var deleted = await session.LoadAsync<ParkingAreaModel>(urn);
            if(deleted is null) return null;
            session.Delete(urn);
            await session.SaveChangesAsync();

            return deleted;
        }
    }

    public async Task<IEnumerable<ParkingAreaModel>> GetAllAsync()
    {
        using (var session = database.GetStore().OpenAsyncSession() )
        {
        ParkingAreaModel[] result = (await session
            .Advanced
            .LoadStartingWithAsync<ParkingAreaModel>("urn:api_v1_parking-areas", null))
            .ToArray();

            return result;
        }
    }
}

