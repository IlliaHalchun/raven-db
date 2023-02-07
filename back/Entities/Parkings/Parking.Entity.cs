namespace TestRavenDB.Entities;

public record ParkingEntity {
    public string Urn {get; init;}
    public ParkingAreaEntity[] ParkingAreas {get; init;}
}
