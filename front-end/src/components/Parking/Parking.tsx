import { ReactElement} from "react"
import styles from "./Parking.module.css"
import {ParkingArea} from "../ParkingArea/ParkingArea";
import {useTypedDispatch, useTypedSelector} from "../../redux/store";
import {ParkingAreaDTO} from "../../dto/parkingArea.dto";
import {updateParking} from "../../redux/parkings/slice";

export interface ParkingProps {
}

export function Parking( { ...props}: ParkingProps): ReactElement {

    const parkingData = useTypedSelector(state => state.parking.currentParking);
    const dispatch = useTypedDispatch();

    const createParkingArea = (data: ParkingAreaDTO) => {
        dispatch(updateParking(data))
    }

    return (
        <div className={styles.Parking}>
            {parkingData.data.map((parkingAreaData, index) => (
                <ParkingArea createFunction={createParkingArea} data={parkingAreaData} key={index}/>
            ))} 
        </div>
    )
}


