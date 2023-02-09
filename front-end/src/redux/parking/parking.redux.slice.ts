import {createSlice} from "@reduxjs/toolkit";
import {IEmptyParkingArea} from "../../common/emptyParkingArea.interface";
import {Loading} from "../../common/loading.enum";
import {ILoading} from "../../common/loading.interface";
import {ParkingDTO} from "../../dto/parking.dto";
import {ParkingAreaDTO} from "../../dto/parkingArea.dto";
import {createInitParkingAreaDisplayData} from "./helpers/createInitParkingAreaDisplayData.helper";
import {createInitParkingData} from "./helpers/createInitParkingData.helper";
import {serializeParkingData} from "./helpers/serializeParkingData.helper";
import {initParking} from "./parking.redux.init";

export interface ICurrentParkingAreaDisplayData {
    name: string,
    discount: number,
    weekendRate: number,
    weekdaysRate: number
}

interface IInitialState {
    currentParking: ILoading<(ParkingAreaDTO | IEmptyParkingArea)[]>
    currentParkingUrn: string
    currentParkingAreaDisplayData: ICurrentParkingAreaDisplayData
    parkings: ILoading<ParkingDTO[]>
}

const initialState: IInitialState = {
    currentParking: {
        data: createInitParkingData(),
        loading: Loading.Pending
    },
    currentParkingAreaDisplayData: createInitParkingAreaDisplayData(),
    currentParkingUrn: "",
    parkings: {
        data: [],
        loading: Loading.Pending
    }
}

export const parkingSlice = createSlice({
    name: "parkingAreas",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {

    builder.addCase(initParking.fulfilled, (state, action) => {
        state.parkings.data = action.payload.parkings;
        state.parkings.loading = Loading.Loaded;

        state.currentParking.data = serializeParkingData(action.payload.parkingAreas);
        state.currentParkingUrn = action.payload.currentParkingUrn;
        state.currentParking.loading = Loading.Loaded;
    })
  },
})

