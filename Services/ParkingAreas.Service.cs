using TestRavenDB.DTO;
using TestRavenDB.Repositories;
using TestRavenDB.Entities;

namespace TestRavenDB.Services;

public class ParkingAreasService : IParkingAreasService
{
    private readonly IParkingAreasRepository repository;

    public ParkingAreasService(IParkingAreasRepository repository)
    {
        this.repository = repository;
    }

    public async Task<ParkingAreaEntity?> CreateParkingAreaAsync(ParkingAreaCreateDTO dto)
    {
        var requestEntity = dto.AsEntity("api_v1_parking-areas");
        return await repository.CreateParkingAreaAsync(requestEntity);
    }

    public async Task<IEnumerable<ParkingAreaEntity>?> GetAllAsync()
    {
        return await repository.GetAllAsync();
    }

    public async Task<ParkingAreaEntity?> GetByUrnAsync(string urn)
    {
        return await repository.GetByUrnAsync(urn);
    }

    public async Task<ParkingAreaEntity?> DeleteByUrnAsync(string urn)
    {
        return await repository.DeleteByUrnAsync(urn);
    }
}
