import {IEmptyParkingArea} from "../../../common/emptyParkingArea.interface";
import {ParkingAreaDTO} from "../../../dto/parkingArea.dto";
import {createInitParkingData} from "./createInitParkingData.helper";

export const serializeParkingData = (data: ParkingAreaDTO[]): (ParkingAreaDTO | IEmptyParkingArea)[] => {
    const result: (ParkingAreaDTO | IEmptyParkingArea)[] = createInitParkingData();

    data.forEach(parkingArea => {
        result[parkingArea.position] = parkingArea
    })

    return result;
}
