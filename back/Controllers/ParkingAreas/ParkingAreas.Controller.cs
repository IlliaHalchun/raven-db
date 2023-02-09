using TestRavenDB.Services;
using TestRavenDB.DTO;
using Microsoft.AspNetCore.Mvc;

namespace TestRavenDB.Controllers;

[ApiController]
[Route("api/v1/parking-areas")]
public class ParkingAreasController : ControllerBase
{
    private readonly IParkingAreasService service;

    public ParkingAreasController(IParkingAreasService service)
    {
        this.service = service;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ParkingAreaDTO>>> GetAllAsync
    (
        [FromQuery(Name = "parking")] string? parkingUrnQuery
    )
    {
        if(parkingUrnQuery is null)
        {
            var parkingAreas = await service.GetAllAsync();
            var result = parkingAreas.Select(parkingArea => parkingArea.AsDTO());
            return Ok(result);
        }
        else
        {
            var parkingAreas = await service.GetByParkingUrn(parkingUrnQuery);
            var result = parkingAreas.Select(parkingArea => parkingArea.AsDTO());
            return Ok(result);
        }
    }

    [HttpPost]
    public async Task<ActionResult<ParkingAreaDTO>> CreateParkingAreaAsync(
        ParkingAreaCreateDTO dto, 
        [FromQuery(Name = "parking")] string? parkingUrnQuery
    )
    {
        if(parkingUrnQuery is null) return StatusCode(StatusCodes.Status500InternalServerError);
        var createdEntity = await service.CreateAsync(dto, parkingUrnQuery);
        if(createdEntity is null) return StatusCode(StatusCodes.Status500InternalServerError);
        var createdDto = createdEntity.AsDTO();

        return Created(createdDto.Data!.Name!, createdDto);
    }

    [HttpGet("{urn}")]
    public async Task<ActionResult<ParkingAreaDTO>> GetByUrnAsync(string urn)
    {
        var parkingArea = await service.GetByUrnAsync(urn);
        if(parkingArea is null) return NotFound();
        var dto = parkingArea.AsDTO();
        return Ok(dto);
    }

    [HttpDelete("{urn}")]
    public async Task<ActionResult<ParkingAreaDTO>> DeleteByUrnAsync(string urn)
    {
        var deleted = await service.DeleteByUrnAsync(urn);
        if(deleted is null) return NotFound();
        var deletedDto = deleted.AsDTO();
        return Ok(deletedDto);
    }
}


