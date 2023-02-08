namespace TestRavenDB.Entities;

// TODO: Figure out Urn accessibility problem
public record ParkingEntity {
    public string Urn {get; set; }

    public ParkingEntity SetUrn()
    {
        string urn = $"urn:api_v1_parkings:{Guid.NewGuid().ToString()}";
        this.Urn = urn;
        return this;
    }
}
