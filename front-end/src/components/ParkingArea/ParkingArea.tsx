import { ReactElement, useState } from "react"
import {ParkingAreaDTO} from "../../common/parkingArea.dto";
import styles from "./ParkingArea.module.css"
import cn from "classnames"

export interface ParkingAreaProps {
    data: ParkingAreaDTO | null; 
}

export function ParkingArea( {data, ...props}: ParkingAreaProps): ReactElement {

    

    return <>
        {data
            ? <div className={styles.ParkingArea}></div>
            : <div className={styles.TakenParkingArea}></div> 
        }
    </>
}
