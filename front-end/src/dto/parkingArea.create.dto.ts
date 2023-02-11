export interface ParkingAreaCreateDTO {
    position: number
    data: {
        name: string
        discountPercentage: number
        weekEndRate: number
        weekDaysRate: number
    }
}
