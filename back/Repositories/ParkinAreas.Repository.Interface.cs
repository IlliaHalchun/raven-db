using TestRavenDB.Entities;

namespace TestRavenDB.Repositories;

public interface IParkingAreasRepository
{
    Task<IEnumerable<ParkingAreaEntity>?> GetAllAsync();
    Task<ParkingAreaEntity?> GetByUrnAsync(string urn);
    Task<ParkingAreaEntity?> DeleteByUrnAsync(string urn);
    Task<ParkingAreaEntity?> CreateParkingAreaAsync(ParkingAreaEntity entity);
}
