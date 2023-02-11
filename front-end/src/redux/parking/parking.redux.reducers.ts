import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {IEmptyParkingArea} from "../../common/emptyParkingArea.interface";
import {Loading} from "../../common/loading.enum";
import {ParkingDTO} from "../../dto/parking.dto";
import {ParkingAreaDTO} from "../../dto/parkingArea.dto";
import {IParkingSliceInitialState} from "./parking.redux.slice";

interface ISetCurrentParkingPayload {
    data: (ParkingAreaDTO | IEmptyParkingArea)[]
    urn: string,
}

export const setCurrentParkingReducer
    : CaseReducer<IParkingSliceInitialState, PayloadAction<ISetCurrentParkingPayload>> = (state, action) => {
    state.currentParking.data = action.payload.data;
    state.currentParking.urn = action.payload.urn
}

export const setCurrentParkingLoadingStateReducer
    : CaseReducer<IParkingSliceInitialState, PayloadAction<Loading>> = (state, action) => {
    state.currentParking.loading = action.payload;
}

export const setCurrentParkingAreaReducer
    : CaseReducer<IParkingSliceInitialState, PayloadAction<ParkingAreaDTO | IEmptyParkingArea>> = (state, action) => {
    state.currentParkingArea = action.payload;
}

export const createParkingAreaReducer
    : CaseReducer<IParkingSliceInitialState, PayloadAction<ParkingAreaDTO>> = (state, action) => {
    state.currentParking.data.forEach((parkingArea) => {
        if(parkingArea.position === action.payload.position) 
            state.currentParking.data[parkingArea.position] = action.payload;
    })
}

export const deleteParkingAreaReducer
    : CaseReducer<IParkingSliceInitialState, PayloadAction<ParkingAreaDTO>> = (state, action) => {
    state.currentParking.data.forEach((parkingArea) => {
        if(parkingArea.position === action.payload.position) 
            state.currentParking.data[parkingArea.position] = {position: action.payload.position, data: null};
    })
}

export const createParkingReducer
    : CaseReducer<IParkingSliceInitialState, PayloadAction<ParkingDTO>> = (state, action) => {
    state.parkings.data = [
        ...state.parkings.data,
        action.payload
    ] 
}

export const deleteParkingReducer
    : CaseReducer<IParkingSliceInitialState, PayloadAction<ParkingDTO>> = (state, action) => {
    state.parkings.data = state.parkings.data.filter(parking => parking.urn !== action.payload.urn)
}
