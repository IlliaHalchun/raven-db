using TestRavenDB.Services;
using TestRavenDB.Entities;

namespace TestRavenDB.Repositories;

public class ParkingsRepository: IParkingsRepository {

    private readonly IDataBaseService database;

    public ParkingsRepository(IDataBaseService database) 
    {
        this.database = database;
    }

    public async Task<IEnumerable<ParkingEntity>> GetAllAsync()
    {
        using (var session = database.GetStore().OpenAsyncSession() )
        {
        ParkingEntity[] result = (await session
            .Advanced
            .LoadStartingWithAsync<ParkingEntity>("urn:api_v1_parkings", null))
            .ToArray();

            return result;
        }
    }

    public async Task<ParkingEntity?> CreateAsync(ParkingEntity entity)
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

    public async Task<ParkingEntity?> DeleteByUrnAsync(string urn)
    {
        using (var session = database.GetStore().OpenAsyncSession())
        {
            var deleted = await session.LoadAsync<ParkingEntity>(urn);
            if(deleted is null) return null;
            session.Delete(urn);
            await session.SaveChangesAsync();
            return deleted;
        }
    }
}
