using TestRavenDB.Entities;
using TestRavenDB.Models;
using TestRavenDB.DTO;

namespace TestRavenDB;

public static class ParkingsExtesions 
{
    public static ParkingEntity AsEntity(this ParkingModel model) 
    {
        return new ParkingEntity()
        {
            Urn = model.Urn,
        };
     }

    public static ParkingModel AsModel(this ParkingEntity entity) 
    {
        return new ParkingModel()
        {
            Urn = entity.Urn,
        };
     }

    public static ParkingDTO AsDTO(this ParkingEntity entity) 
    {
        return new ParkingDTO()
        {
            Urn = entity.Urn,
        };
     }
}

