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
    public ActionResult<IEnumerable<ParkingAreaDTO>> GetAll()
    {
        var parkingAreas = service.GetAll();
        if(parkingAreas is null) return NotFound();
        var result = parkingAreas.Select(parkingArea => parkingArea.AsDTO());
        return Ok(result);
    }

    [HttpPost]
    public ActionResult<ParkingAreaDTO> CreateParkingArea(ParkingAreaCreateDTO dto)
    {
        var createdEntity = service.CreateParkingArea(dto);
        if(createdEntity is null) return StatusCode(StatusCodes.Status500InternalServerError);
        var createdDto = createdEntity.AsDTO();
        return Created(createdDto.Name, createdDto);
    }

    [HttpGet("{urn}")]
    public ActionResult<ParkingAreaDTO> GetByUrn(string urn)
    {
        var parkingArea = service.GetByUrn(urn);
        if(parkingArea is null) return NotFound();
        var dto = parkingArea.AsDTO();
        return Ok(dto);
    }

    [HttpDelete("{urn}")]
    public ActionResult<ParkingAreaDTO> DeleteByUrn(string urn)
    {
        var deleted = service.DeleteByUrn(urn);
        if(deleted is null) return NotFound();
        var deletedDto = deleted.AsDTO();
        return deletedDto;
    }
}


