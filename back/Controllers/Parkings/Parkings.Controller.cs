using TestRavenDB.Services;
using TestRavenDB.DTO;
using Microsoft.AspNetCore.Mvc;

namespace TestRavenDB.Controllers;

[ApiController]
[Route("api/v1/parkings")]
public class ParkingsController: ControllerBase {
    private readonly IParkingsService service;

    public ParkingsController(IParkingsService service)
    {
        this.service = service;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ParkingDTO>>> GetAllAsync()
    {
        var parkings = await service.GetAllAsync();
        var result = parkings.Select(parking => parking.AsDTO());
        return Ok(result);
    }
    
    [HttpPost]
    public async Task<ActionResult<ParkingDTO>> CreateAsync()
    {
        var parking = await this.service.CreateAsync();
        if(parking is null) return StatusCode(StatusCodes.Status500InternalServerError);
        return Ok(parking);
    }

    [HttpGet("{urn}")]
    public async Task<ActionResult<ParkingAreaDTO>> GetByUrnAsync(string urn)
    {
        var parking = await service.GetByUrnAsync(urn);
        if(parking is null) return NotFound();
        var dto = parking.AsDTO();
        return Ok(dto);
    }

    [HttpDelete("{urn}")]
    public async Task<ActionResult<ParkingDTO>> DeleteByUrnAsync(string urn)
    {
        var deleted = await service.DeleteByUrnAsync(urn);
        if(deleted is null) return NotFound();
        var deletedDto = deleted.AsDTO();
        return Ok(deletedDto);
    }
}
