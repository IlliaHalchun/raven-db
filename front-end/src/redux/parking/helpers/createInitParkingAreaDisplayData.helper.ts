import {ICurrentParkingAreaDisplayData} from "../parking.redux.slice"

export const createInitParkingAreaDisplayData = ():ICurrentParkingAreaDisplayData => {
    return {
        name: "",
        discount: 0,
        weekdaysRate: 0,
        weekendRate: 0
    } 
}
