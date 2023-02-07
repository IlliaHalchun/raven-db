using TestRavenDB.Entities;
using TestRavenDB.DTO;

namespace TestRavenDB.Services;

public interface IParkingsService {
    Task<IEnumerable<ParkingEntity>> GetAllAsync();
    Task<ParkingEntity?> CreateAsync(ParkingCreateDTO dto);
    Task<ParkingEntity?> DeleteByUrnAsync(string urn);
}
