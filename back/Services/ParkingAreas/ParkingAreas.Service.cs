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

    public async Task<ParkingAreaEntity?> CreateAsync(ParkingAreaCreateDTO dto, string parkingUrn)
    {
        var requestEntity = dto
            .AsEntity()
            .SetUrn()
            .SetParkingUrn(parkingUrn);
        var requestModel = requestEntity.AsModel();
        var responseModel = await repository.CreateAsync(requestModel);
        if(responseModel is null) return null;
        return responseModel.AsEntity();

    }

    public async Task<IEnumerable<ParkingAreaEntity>> GetAllAsync()
    {
        var responceModelsArray = await repository.GetAllAsync();
        var responceEntitiesArray = responceModelsArray.Select(model => model.AsEntity());
        return responceEntitiesArray;
    }

    public async Task<IEnumerable<ParkingAreaEntity>> GetByParkingUrn(string urn)
    {
        var responceModelsList = await repository.GetByParkingUrn(urn);
        var responceEntitiesList = responceModelsList.Select(model => model.AsEntity());
        return responceEntitiesList;
    }

    public async Task<ParkingAreaEntity?> GetByUrnAsync(string urn)
    {
        var responseModel = await repository.GetByUrnAsync(urn);
        if(responseModel is null) return null;
        return responseModel.AsEntity();
    }

    public async Task<ParkingAreaEntity?> DeleteByUrnAsync(string urn)
    {
        var responceModel = await repository.DeleteByUrnAsync(urn);
        if(responceModel is null) return null;
        return responceModel.AsEntity();
    }
}
