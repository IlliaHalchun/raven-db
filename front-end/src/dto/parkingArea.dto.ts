export interface ParkingAreaDTO {
    position: number
    data: {
        urn: string
        parkingUrn: string
        name: string
        discount: number
        weekendRate: number
        weekdaysRate: number
    }
}
