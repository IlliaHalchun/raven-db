using TestRavenDB.Entities;
using TestRavenDB.DTO;

namespace TestRavenDB;

public static class Extesions 
{
    public static ParkingAreaDTO AsDTO(this ParkingAreaEntity entity)
    {
        return new ParkingAreaDTO()
        {
            Urn = entity.Urn,
            Name = entity.Name,
            WeekDaysRate = entity.WeekDaysRate,
            WeekEndRate = entity.WeekEndRate,
            DiscountPercentage = entity.DiscountPercentage,
        };
    }

     public static ParkingAreaEntity AsEntity(this ParkingAreaCreateDTO dto, string urnAddres)
    {
        string[] arr = new string[3]
        {
            "urn",
            urnAddres,
            Guid.NewGuid().ToString()
        };

        string urn = String.Join(":", arr);

        return new ParkingAreaEntity()
        {
            Urn = urn,
            Name = dto.Name,
            WeekDaysRate = dto.WeekDaysRate,
            WeekEndRate = dto.WeekEndRate,
            DiscountPercentage = dto.DiscountPercentage,
        };
    }
}
