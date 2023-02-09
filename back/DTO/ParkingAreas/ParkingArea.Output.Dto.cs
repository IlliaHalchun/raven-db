namespace TestRavenDB.DTO;

public record ParkingAreaDTO
{
    public int Position { get; init; }
    public ParkingAreaData? Data { get; init; }
}

public record ParkingAreaData
{
    public string? Urn { get; init; }
    public string? ParkingUrn { get; set; }
    public string? Name { get; init; }
    public int WeekDaysRate { get; init; }
    public int WeekEndRate { get; init; }
    public int DiscountPercentage { get; init; }
}