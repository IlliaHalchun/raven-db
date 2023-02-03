using TestRavenDB.Entities;

namespace TestRavenDB.Repositories;

public interface IParkingAreasRepository
{
    IEnumerable<ParkingAreaEntity>? GetAll();
    ParkingAreaEntity? GetByUrn(string urn);
    ParkingAreaEntity? DeleteByUrn(string urn);
    ParkingAreaEntity? CreateParkingArea(ParkingAreaEntity entity);
}
