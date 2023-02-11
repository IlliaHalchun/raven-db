using TestRavenDB.Models;

namespace TestRavenDB.Repositories;

public interface IParkingAreasRepository
{
    Task<IEnumerable<ParkingAreaModel>> GetByParkingUrn(string urn);
    Task<IEnumerable<ParkingAreaModel>> GetAllAsync();
    Task<ParkingAreaModel?> GetByUrnAsync(string urn);
    Task<ParkingAreaModel?> DeleteByUrnAsync(string urn);
    Task<ParkingAreaModel?> CreateAsync(ParkingAreaModel model);
}
