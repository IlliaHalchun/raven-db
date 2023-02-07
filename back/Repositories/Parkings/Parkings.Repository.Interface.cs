using TestRavenDB.Entities;

namespace TestRavenDB.Repositories;

public interface IParkingsRepository {
    Task<IEnumerable<ParkingEntity>> GetAllAsync();
    Task<ParkingEntity?> CreateAsync(ParkingEntity entiry);
    Task<ParkingEntity?> DeleteByUrnAsync(string urn);
}

