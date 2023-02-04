using Raven.Client;
using TestRavenDB.Services;
using TestRavenDB.Entities;

namespace TestRavenDB.Repositories;

public class ParkingAreasRepository : IParkingAreasRepository
{
    private readonly IDataBaseService database;

    public ParkingAreasRepository(IDataBaseService database)
    {
        this.database = database;
    }

    public async Task<ParkingAreaEntity?> CreateParkingAreaAsync(ParkingAreaEntity entity)
    {
        using (var session = database.GetStore().OpenAsyncSession() )
        {
            try {
                await session.StoreAsync(entity, entity.Urn);
                await session.SaveChangesAsync();

                return entity;
            } catch {
                return null;
            }
        }
    }

    public async Task<ParkingAreaEntity?> GetByUrnAsync(string urn)
    {
        using (var session = database.GetStore().OpenAsyncSession() )
        {
            var result = await session.LoadAsync<ParkingAreaEntity>(urn);

            return result;
        }
    }

    public async Task<ParkingAreaEntity?> DeleteByUrnAsync(string urn)
    {
        using (var session = database.GetStore().OpenAsyncSession())
        {
            var deleted = await session.LoadAsync<ParkingAreaEntity>(urn);
            if(deleted is null) return null;
            session.Delete(urn);
            await session.SaveChangesAsync();
            return deleted;
        }
    }

    public async Task<IEnumerable<ParkingAreaEntity>?> GetAllAsync()
    {
        using (var session = database.GetStore().OpenAsyncSession() )
        {
        ParkingAreaEntity[] result = (await session
            .Advanced
            .LoadStartingWithAsync<ParkingAreaEntity>("urn:api_v1_parking", null))
            .ToArray();

            return result;
        }
    }
}

