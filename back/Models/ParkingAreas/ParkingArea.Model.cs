namespace TestRavenDB.Models;

public record ParkingAreaModel {
    public int Position { get; init; }
    public ParkingAreaModelData? Data { get; init; }
}

public record ParkingAreaModelData
{
    public string? Name { get; init; }
    public int WeekDaysRate { get; init; }
    public int WeekEndRate { get; init; }
    public int DiscountPercentage { get; init; }
    public string? Urn { get; init; }
    public string? ParkingUrn { get; init; }
}