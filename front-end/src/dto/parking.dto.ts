import {ParkingAreaDTO} from "./parkingArea.dto"

export interface ParkingDTO {
    urn: string
    parkingAreas: ParkingAreaDTO[]
}
