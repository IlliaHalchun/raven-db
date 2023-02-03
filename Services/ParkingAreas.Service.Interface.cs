using TestRavenDB.DTO;
using TestRavenDB.Entities;

namespace TestRavenDB.Services;

public interface IParkingAreasService
{
    Task<ParkingAreaEntity?> GetByUrnAsync(string urn);
    Task<ParkingAreaEntity?> DeleteByUrnAsync(string urn);
    Task<IEnumerable<ParkingAreaEntity>?> GetAllAsync();
    Task<ParkingAreaEntity?> CreateParkingAreaAsync(ParkingAreaCreateDTO dto);
}
