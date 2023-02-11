using TestRavenDB.Entities;
using TestRavenDB.DTO;

namespace TestRavenDB.Services;

public interface IParkingsService {
    Task<ParkingEntity?> GetByUrnAsync(string urn);
    Task<IEnumerable<ParkingEntity>> GetAllAsync();
    Task<ParkingEntity?> CreateAsync();
    Task<ParkingEntity?> DeleteByUrnAsync(string urn);
}
