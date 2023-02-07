using TestRavenDB.Entities;
using TestRavenDB.DTO;
using TestRavenDB.Repositories;

namespace TestRavenDB.Services;

public class ParkingsService {
    private readonly IParkingsRepository repository;

    public ParkingsService(IParkingsRepository repository)
    {
        this.repository = repository;
    }

    Task<IEnumerable<ParkingEntity>> GetAllAsync()
    {

    }

    Task<ParkingEntity?> CreateAsync(ParkingCreateDTO dto)
    {

    }

    Task<ParkingEntity?> DeleteByUrnAsync(string urn)
    {

    }
}
