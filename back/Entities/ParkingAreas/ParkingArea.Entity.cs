namespace TestRavenDB.Entities;

public record ParkingAreaEntity
{
    public string Urn {get; set; }
    public string ParkingUrn {get; init; }
    public string Name { get; init; }
    public int WeekDaysRate { get; init; }
    public int WeekEndRate { get; init; }
    public int DiscountPercentage { get; init; }

    public ParkingAreaEntity SetUrn()
    {
        string urn = $"urn:api_v1_parking-areas:{Guid.NewGuid().ToString()}";
        this.Urn = urn;
        return this;
    }
}
