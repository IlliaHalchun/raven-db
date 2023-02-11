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
import { setCurrentParkingLoadingStateReducer,
    setCurrentParkingReducer,
    setCurrentParkingAreaReducer,
    createParkingAreaReducer,
    deleteParkingAreaReducer,
    createParkingReducer,
    deleteParkingReducer
} from "./parking.redux.reducers";

export interface ICurrentParkingAreaDisplayData {
    name: string,
    discount: number,
    weekendRate: number,
    weekdaysRate: number
}

export interface IParkingSliceInitialState {
    currentParkingArea: ParkingAreaDTO | IEmptyParkingArea
    currentParking: {
        data: (ParkingAreaDTO | IEmptyParkingArea)[],
        urn: string,
        loading: Loading,
    }
    currentParkingAreaDisplayData: ICurrentParkingAreaDisplayData
    parkings: ILoading<ParkingDTO[]>
}

const initialState: IParkingSliceInitialState = {
    currentParkingArea: {position: 0, data: null},
    currentParking: {
        data: createInitParkingData(),
        urn: "",
        loading: Loading.Pending
    },
    currentParkingAreaDisplayData: createInitParkingAreaDisplayData(),
    parkings: {
        data: [],
        loading: Loading.Pending
    }
}

export const parkingSlice = createSlice({
    name: "parkingAreas",
    initialState,
    reducers: {
        setCurrentParkingReducer,
        setCurrentParkingLoadingStateReducer,
        setCurrentParkingAreaReducer,
        createParkingAreaReducer,
        deleteParkingAreaReducer,
        createParkingReducer,
        deleteParkingReducer

    },
    extraReducers: (builder) => {

        // State Init
        builder.addCase(initParking.fulfilled, (state, action) => {
            state.parkings.data = action.payload.parkings;
            state.parkings.loading = Loading.Loaded;

            state.currentParking.data = serializeParkingData(action.payload.parkingAreas);
            state.currentParking.urn = action.payload.currentParkingUrn;
            state.currentParking.loading = Loading.Loaded;
        })
    },
})

export const {
    setCurrentParkingReducer: setCurrentParkingAction,
    setCurrentParkingLoadingStateReducer: setCurrentParkingLoadingStateAction,
    setCurrentParkingAreaReducer: setCurrentParkingAreaAction,
    createParkingAreaReducer: createParkingAreaAction,
    deleteParkingAreaReducer: deleteParkingAreaAction,
    createParkingReducer: createParkingAction,
    deleteParkingReducer: deleteParkingAction
} = parkingSlice.actions;
