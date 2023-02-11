import axios, {AxiosResponse} from "axios";
import {Loading} from "../../common/loading.enum";
import {ParkingDTO} from "../../dto/parking.dto";
import {ParkingAreaCreateDTO} from "../../dto/parkingArea.create.dto";
import {serializeParkingData} from "./helpers/serializeParkingData.helper";
import {createParkingAction, createParkingAreaAction, deleteParkingAction, deleteParkingAreaAction, setCurrentParkingAction, setCurrentParkingLoadingStateAction} from "./parking.redux.slice";

// TODO: Port Configuration from docker

export const thunkChangeCurrentParking = (urn: string) => async (dispatch) => {
    dispatch(setCurrentParkingLoadingStateAction(Loading.Pending))
    const parkingToChange = await axios.get(`http://localhost:5244/api/v1/parking-areas?parking=${urn}`);

    dispatch(setCurrentParkingAction({
        data: serializeParkingData(parkingToChange.data),
        urn
    }))

    dispatch(setCurrentParkingLoadingStateAction(Loading.Loaded))
}

export const thunkCreateParkingArea = (data: ParkingAreaCreateDTO, parkingUrn: string) => async (dispatch) => {
    const {data: createdParkingArea} = await axios
        .post(`http://localhost:5244/api/v1/parking-areas?parking=${parkingUrn}`, data)

    dispatch(createParkingAreaAction(createdParkingArea)) 
} 

export const thunkDeleteParkingArea = (urn: string) => async (dispatch) => {
    const {data: deletedParkingArea} = await axios.delete(`http://localhost:5244/api/v1/parking-areas/${urn}`);

    dispatch(deleteParkingAreaAction(deletedParkingArea))
}

export const thunkCreateParking = () => async (dispatch) => {
    const {data: createdParking}: AxiosResponse<ParkingDTO> = await axios.post(`http://localhost:5244/api/v1/parkings`);

    dispatch(createParkingAction(createdParking))
    
    const parkingToChange = await axios.get(`http://localhost:5244/api/v1/parking-areas?parking=${createdParking.urn}}`);

    dispatch(setCurrentParkingAction({
        data: serializeParkingData(parkingToChange.data),
        urn: createdParking.urn
    }))
}

export const thunkDeleteParking = (urn: string) => async (dispatch) => {
    await axios.delete(`http://localhost:5244/api/v1/parkings/${urn}`);
    dispatch(deleteParkingAction({urn}))
}
