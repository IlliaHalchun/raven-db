import {createAsyncThunk} from "@reduxjs/toolkit";
import axios, {AxiosResponse} from "axios";
import {ParkingDTO} from "../../dto/parking.dto";
import {ParkingAreaDTO} from "../../dto/parkingArea.dto";

// TODO: Add Docker Port config
// TODO: Implement exception filter
// TODO: Implement init state on empty
export const initParking = createAsyncThunk(
    "parkings/init",
    async (argument, ThunkAPI) => {
        const {data: parkings}: AxiosResponse<ParkingDTO[]> = await axios
            .get("http://127.0.0.1:5244/api/v1/parkings");

        let currentParkingUrn: string;

        if(parkings.length) {
            currentParkingUrn = parkings[0].urn;
        } else {
            const {data: parking}: AxiosResponse<ParkingDTO> = await axios.post(`http://127.0.0.1:5244/api/v1/parkings`);
            currentParkingUrn = parking.urn;
            parkings.push(parking);
        }
        
        const {data: parkingAreas}: AxiosResponse<ParkingAreaDTO[]> = await axios
            .get(`http://127.0.0.1:5244/api/v1/parking-areas?parking=${currentParkingUrn}`);
        
        return {
            parkings: parkings,
            parkingAreas: parkingAreas,
            currentParkingUrn
        };
    }
);
