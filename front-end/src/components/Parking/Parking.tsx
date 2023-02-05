import type { ReactElement } from "react"
import styles from "./Parking.module.css"
import {ParkingAreaDTO} from "../../common/parkingArea.dto";
import {ParkingArea} from "../ParkingArea/ParkingArea";

export interface ParkingProps {
    data: ParkingAreaDTO[]
}

export function Parking( {data, ...props}: ParkingProps): ReactElement {

    const serialize = (rawData: typeof data): ReactElement[] => {
        const rawParkingData = new Array(6).fill(null);
        data.forEach((parkingArea) => {
            const takenIndex = parkingArea.position;
            rawParkingData[takenIndex] = parkingArea;
        })

        const serializedParkingData = rawParkingData.map(parkingAreaOrNull => (
            <ParkingArea data={parkingAreaOrNull}/>
        ));

        return serializedParkingData;
    }

    return (
        <div className={styles.Parking}>
            {serialize(data)} 
        </div>
    )
}
