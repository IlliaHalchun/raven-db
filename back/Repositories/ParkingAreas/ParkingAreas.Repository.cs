using TestRavenDB.Services;
using TestRavenDB.Models;
using Raven.Client.Documents;

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
                await session.StoreAsync(model, model.Data!.Urn);
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
            List<ParkingAreaModel> result = await session
                .Query<ParkingAreaModel>()
                .ToListAsync();

            return result;
        }
    }

    public async Task<IEnumerable<ParkingAreaModel>> GetByParkingUrn(string urn)
    {
         using (var session = database.GetStore().OpenAsyncSession() )
        {
            List<ParkingAreaModel> result = await session
               .Query<ParkingAreaModel>()
               .Where(parkingArea => parkingArea.Data!.ParkingUrn == urn)
               .ToListAsync();

            return result;
        }

    }
}

