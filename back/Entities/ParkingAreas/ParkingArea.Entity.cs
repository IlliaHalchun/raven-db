namespace TestRavenDB.Entities;

// TODO: Figure out Urn accessibility problem
public record ParkingAreaEntity
{
    public int Position { get; init; }
    public ParkingAreaEntityData? Data { get; init; }

    public ParkingAreaEntity SetUrn()
    {
        string urn = $"urn:api_v1_parking-areas:{Guid.NewGuid().ToString()}";
        this.Data!.Urn = urn;
        return this;
    }

    public ParkingAreaEntity SetParkingUrn(string urn)
    {
        this.Data!.ParkingUrn = urn;
        return this;
    }
}

public record ParkingAreaEntityData
{
    public string? Urn { get; set; }
    public string? ParkingUrn { get; set; }
    public string? Name { get; init; }
    public int WeekDaysRate { get; init; }
    public int WeekEndRate { get; init; }
    public int DiscountPercentage { get; init; }
}