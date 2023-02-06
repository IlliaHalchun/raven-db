import type { ReactElement } from "react"
import styles from "./Parking.module.css"
import {ParkingAreaDTO} from "../../dto/parkingArea.dto";
import {ParkingArea} from "../ParkingArea/ParkingArea";

export interface ParkingProps {
    data: ParkingAreaDTO[]
}

export function Parking( {data, ...props}: ParkingProps): ReactElement {

    const serialize = (rawData: typeof data): (ParkingAreaDTO | null)[] => {
        const rawParkingData = new Array(6).fill(null);

        rawData.forEach((parkingArea) => {
            rawParkingData[parkingArea.position] = parkingArea;
        })

        return rawParkingData;
    }


    const serializedData = serialize(data);

    return (
        <div className={styles.Parking}>
            {serializedData.map((parkingAreaData, index) => (
                <ParkingArea data={parkingAreaData} key={index}/>
            ))} 
        </div>
    )
}
