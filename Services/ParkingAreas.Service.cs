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

    public ParkingAreaEntity? CreateParkingArea(ParkingAreaCreateDTO dto)
    {
        var requestEntity = dto.AsEntity("api_v1_parking-areas");
        return repository.CreateParkingArea(requestEntity);
    }

    public IEnumerable<ParkingAreaEntity>? GetAll()
    {
        return repository.GetAll();
    }

    public ParkingAreaEntity? GetByUrn(string urn)
    {
        return repository.GetByUrn(urn);
    }

    public ParkingAreaEntity? DeleteByUrn(string urn)
    {
        return repository.DeleteByUrn(urn);
    }
}
