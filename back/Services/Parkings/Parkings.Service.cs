using TestRavenDB.Entities;
using TestRavenDB.Repositories;

namespace TestRavenDB.Services;

public class ParkingsService: IParkingsService {
    private readonly IParkingsRepository repository;

    public ParkingsService(IParkingsRepository repository)
    {
        this.repository = repository;
    }

    public async Task<ParkingEntity?> GetByUrnAsync(string urn)
    {
        var responseModel = await repository.GetByUrnAsync(urn);
        if(responseModel is null) return null;
        return responseModel.AsEntity();
    }

    public async Task<IEnumerable<ParkingEntity>> GetAllAsync()
    {
        var responceModelsArray = await this.repository.GetAllAsync();  
        var responceEntitiesArray = responceModelsArray.Select(model => model.AsEntity());
        return responceEntitiesArray;
    }

    public async Task<ParkingEntity?> CreateAsync()
    {
        var requestEntity = new ParkingEntity().SetUrn();
        var requestModel = requestEntity.AsModel();
        var responceModel = await this.repository.CreateAsync(requestModel);
        if(responceModel is null) return null;
        return responceModel.AsEntity();
    }

    public async Task<ParkingEntity?> DeleteByUrnAsync(string urn)
    {
        var responceModel = await this.repository.DeleteByUrnAsync(urn);
        if(responceModel is null) return null;
        return responceModel.AsEntity();
    }
}
