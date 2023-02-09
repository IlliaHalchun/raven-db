import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";
import {ParkingDTO} from "../../dto/parking.dto";
import {ParkingAreaDTO} from "../../dto/parkingArea.dto";

// TODO: Implement exception filter
// TODO: Implement init state on empty
export const initParking = createAsyncThunk(
    "parkings/init",
    async (argument, ThunkAPI) => {
        // TODO: Add Docker Port config
        const parkings: AxiosResponse<ParkingDTO[]> = await axios
            .get("http://127.0.0.1:5244/api/v1/parkings");
        
        const currentParkingUrn = parkings.data[0].urn;

        const parkingAreas: AxiosResponse<ParkingAreaDTO[]> = await axios
            .get(`http://127.0.0.1:5244/api/v1/parking-areas?parking=${currentParkingUrn}`);
        
        return {
            parkings: parkings.data,
            parkingAreas: parkingAreas.data,
            currentParkingUrn
        };
    }
);
