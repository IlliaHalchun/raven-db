using TestRavenDB.Entities;
using TestRavenDB.DTO;
using TestRavenDB.Models;

namespace TestRavenDB;

public static class ParkingAreasExtesions 
{

    public static ParkingAreaEntity AsEntity(this ParkingAreaModel model) 
    {
        return new ParkingAreaEntity()
        {  
            Position = model.Position,
            Data = new ParkingAreaEntityData()
            {
                Urn = model.Data!.Urn,
                ParkingUrn = model.Data.ParkingUrn,
                Name = model.Data.Name,
                WeekDaysRate = model.Data.WeekDaysRate,
                WeekEndRate = model.Data.WeekEndRate,
                DiscountPercentage = model.Data.DiscountPercentage,
            }
        };
     }

    public static ParkingAreaDTO AsDTO(this ParkingAreaEntity entity)
    {
        return new ParkingAreaDTO()
        {
            Position = entity.Position,
            Data = new ParkingAreaData()
            {
                Urn = entity.Data!.Urn,
                ParkingUrn = entity.Data.ParkingUrn,
                Name = entity.Data.Name,
                WeekDaysRate = entity.Data.WeekDaysRate,
                WeekEndRate = entity.Data.WeekEndRate,
                DiscountPercentage = entity.Data.DiscountPercentage,
            }
        };
    }

    public static ParkingAreaEntity AsEntity(this ParkingAreaCreateDTO dto)
    {
        return new ParkingAreaEntity()
        {
            Position = dto.Position,
            Data = new ParkingAreaEntityData()
            {
                Name = dto.Data!.Name,
                WeekDaysRate = dto.Data.WeekDaysRate,
                WeekEndRate = dto.Data.WeekEndRate,
                DiscountPercentage = dto.Data.DiscountPercentage,
            }
        };
    }

     public static ParkingAreaModel AsModel(this ParkingAreaEntity entity) 
     {
        return new ParkingAreaModel()
        {
            Position = entity.Position,
            Data = new ParkingAreaModelData()
            {
                Urn = entity.Data!.Urn,
                ParkingUrn = entity.Data.ParkingUrn,
                Name = entity.Data.Name,
                WeekDaysRate = entity.Data.WeekDaysRate,
                WeekEndRate = entity.Data.WeekEndRate,
                DiscountPercentage = entity.Data.DiscountPercentage,
            }
        };
     }
}
