import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {Loading} from "../../common/loading.enum";
import {ILoading} from "../../common/loading.interface";
import {ParkingDTO} from "../../dto/parking.dto";
import {ParkingAreaDTO} from "../../dto/parkingArea.dto";


export interface IInitialState {
    currentParking: ILoading<(ParkingAreaDTO | null)[]>
    parkings: ILoading<ParkingDTO[]>
}

const initialState: IInitialState = {
    currentParking: {
        data: new Array(6).fill(null),
        loading: Loading.Pending
    },
    parkings: {
        data: [],
        loading: Loading.Pending
    }
}

const fetchParkings = createAsyncThunk(
    "parkings/init",
    async (argument, ThunkAPI) => {
        // TODO: Add Docker Port config
        const parkings: ParkingDTO[] = await axios.get("http:/127.0.0.1:5244/parkings") ;
    }
);

export const parkingAreasSlice = createSlice({
    name: "parkingAreas",
    initialState,
    reducers: {
        initParking(state) {

            state.currentParking.data[parkingAreaPosition] = action.payload;
        }
    }
})

export const { updateParking } = parkingAreasSlice.actions;
