import { ReactElement, useState } from "react"
import {ParkingAreaDTO} from "../../dto/parkingArea.dto"
import {ReactComponent as DeleteSVG} from "./src/DeleteSVG.svg"
import styles from "./ParkingArea.module.css"
import cn from "classnames"
import {Appearance, Button} from "../../UI/Button/Button"

export interface ParkingAreaProps {
    createFunction: (data: ParkingAreaDTO) => void;
    data: ParkingAreaDTO | null; 
}

export function ParkingArea( {data, ...props}: ParkingAreaProps): ReactElement {
    
    return <>
        {data
            ? <div className={cn(styles.ParkingArea, styles.Reserved)}>
                <Button appearance={Appearance.Dark}>COUNT PARKING FEES</Button>
                <Button appearance={Appearance.Dark}>UPDATE</Button>
                <Button 
                    className={styles.DeleteButton}
                    appearance={Appearance.Dark}
                >
                    <DeleteSVG className={styles.DeleteSVG}/>
                </Button>
            </div> 
            : <div className={cn(styles.ParkingArea, styles.NotReserved)}>
                <Button appearance={Appearance.Dark}>RENT</Button>
            </div>

        }
    </>
}
