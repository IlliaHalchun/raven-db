using TestRavenDB.Entities;
using TestRavenDB.Models;

namespace TestRavenDB.Repositories;

public interface IParkingsRepository {
    Task<IEnumerable<ParkingModel>> GetAllAsync();
    Task<ParkingModel?> GetByUrnAsync(string urn);
    Task<ParkingModel?> CreateAsync(ParkingModel model);
    Task<ParkingModel?> DeleteByUrnAsync(string urn);
}

