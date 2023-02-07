using TestRavenDB.Entities;
using TestRavenDB.DTO;
using TestRavenDB.Models;

namespace TestRavenDB;

public static class Extesions 
{

    public static ParkingAreaEntity AsEntity(this ParkingAreaModel model) 
    {
        return new ParkingAreaEntity()
        {
            Urn = model.Urn,
            ParkingUrn = model.ParkingUrn,
            Name = model.Name,
            WeekDaysRate = model.WeekDaysRate,
            WeekEndRate = model.WeekEndRate,
            DiscountPercentage = model.DiscountPercentage,
        };
     }

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

    public static ParkingAreaEntity AsEntity(this ParkingAreaCreateDTO dto)
    {
        return new ParkingAreaEntity()
        {
            ParkingUrn = dto.ParkingUrn,
            Name = dto.Name,
            WeekDaysRate = dto.WeekDaysRate,
            WeekEndRate = dto.WeekEndRate,
            DiscountPercentage = dto.DiscountPercentage,
        };
    }

     public static ParkingAreaModel AsModel(this ParkingAreaEntity entity) 
     {
        return new ParkingAreaModel()
        {
            Urn = entity.Urn,
            ParkingUrn = entity.ParkingUrn,
            Name = entity.Name,
            WeekDaysRate = entity.WeekDaysRate,
            WeekEndRate = entity.WeekEndRate,
            DiscountPercentage = entity.DiscountPercentage,
        };
     }

    }
