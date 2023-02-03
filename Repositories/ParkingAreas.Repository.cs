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

    public ParkingAreaEntity? CreateParkingArea(ParkingAreaEntity entity)
    {
        using (var session = database.GetStore().OpenSession() )
        {
            try {
                session.Store(entity, entity.Urn);
                session.SaveChanges();

                return entity;
            } catch {
                return null;
            }
        }
    }

    public ParkingAreaEntity? GetByUrn(string urn)
    {
        using (var session = database.GetStore().OpenSession() )
        {
            var result = session.Load<ParkingAreaEntity>(urn);

            return result;
        }
    }

    public ParkingAreaEntity? DeleteByUrn(string urn)
    {
        using (var session = database.GetStore().OpenSession())
        {
            var deleted = session.Load<ParkingAreaEntity>(urn);
            if(deleted is null) return null;
            session.Delete(urn);
            session.SaveChanges();
            return deleted;
        }
    }

    public IEnumerable<ParkingAreaEntity>? GetAll()
    {
        using (var session = database.GetStore().OpenSession() )
        {
            ParkingAreaEntity[] result = session
                .Advanced
                .LoadStartingWith<ParkingAreaEntity>("urn:api_v1_parking", null);

            return result;
        }
    }
}

