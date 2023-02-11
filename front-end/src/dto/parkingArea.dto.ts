export interface ParkingAreaDTO {
    position: number
    data: {
        urn: string
        parkingUrn: string
        name: string
        discountPercentage: number
        weekEndRate: number
        weekDaysRate: number
    }
}
