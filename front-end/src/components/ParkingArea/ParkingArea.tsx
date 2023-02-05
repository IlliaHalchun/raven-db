import { ReactElement, useState } from "react"
import {ParkingAreaDTO} from "../../common/parkingArea.dto";
import styles from "./ParkingArea.module.css"
import cn from "classnames"
import {Appearance, Button} from "../../UI/Button/Button";

export interface ParkingAreaProps {
    data: ParkingAreaDTO | null; 
}

export function ParkingArea( {data, ...props}: ParkingAreaProps): ReactElement {

    return <>
        {data
            ? <div className={cn(styles.ParkingArea, styles.Reserved)}>
                <Button appearance={Appearance.Dark}>COUNT PARKING FEES</Button>
                <Button appearance={Appearance.Dark}>DELETE</Button>
            </div> 
            : <div className={cn(styles.ParkingArea, styles.NotReserved)}>
                <Button appearance={Appearance.Dark}>RENT</Button>
            </div>

        }
    </>
}
