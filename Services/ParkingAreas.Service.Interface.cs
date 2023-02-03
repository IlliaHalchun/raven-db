using TestRavenDB.DTO;
using TestRavenDB.Entities;

namespace TestRavenDB.Services;

public interface IParkingAreasService
{
    ParkingAreaEntity? GetByUrn(string urn);
    ParkingAreaEntity? DeleteByUrn(string urn);
    IEnumerable<ParkingAreaEntity>? GetAll();
    ParkingAreaEntity? CreateParkingArea(ParkingAreaCreateDTO dto);
}
