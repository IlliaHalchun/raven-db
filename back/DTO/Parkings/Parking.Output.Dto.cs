namespace TestRavenDB.DTO;

public record ParkingDTO {
    public string Urn {get; init;}
    public ParkingAreaDTO[] ParkingAreas {get; init;}
}
