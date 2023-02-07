using System.ComponentModel.DataAnnotations;

namespace TestRavenDB.DTO;

public record ParkingAreaCreateDTO
{
    public string ParkingUrn {get; init; }

    [Required]
    public string Name { get; init; }

    [Required]
    public int WeekDaysRate { get; init; }

    [Required]
    public int WeekEndRate { get; init; }

    [Required]
    [Range(1, 100)]
    public int DiscountPercentage { get; init; }
}
