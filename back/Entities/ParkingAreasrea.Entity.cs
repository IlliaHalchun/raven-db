namespace TestRavenDB.Entities;

public record ParkingAreaEntity
{
    public string Urn {get; init;}
    public string Name { get; init; }
    public int WeekDaysRate { get; init; }
    public int WeekEndRate { get; init; }
    public int DiscountPercentage { get; init; }
}
