import type { ReactElement } from "react"
import styles from "./Body.module.css"
import {ReactComponent as BodyShape} from './src/Body.svg';
import {ReactComponent as BodyStroke} from './src/Body(Stroke).svg';
import {SideBar} from "../SideBar/SideBar";
import {ParkingAreaDTO} from "../../common/parkingArea.dto";
import {Parking} from "../Parking/Parking";

export interface BodyProps {
    
}

export function Body(props: BodyProps): ReactElement {

    const data: ParkingAreaDTO[] = [
        {urn: "1", position: 1, name: "Test", discount: 10, weekdaysRate: 10, weekendRate: 20},
        {urn: "1", position: 3, name: "Test", discount: 10, weekdaysRate: 10, weekendRate: 20},
        {urn: "1", position: 4, name: "Test", discount: 10, weekdaysRate: 10, weekendRate: 20},
        {urn: "1", position: 5, name: "Test", discount: 10, weekdaysRate: 10, weekendRate: 20},
    ]

    return (
        <div className={styles.Body}>
            <BodyShape className={styles.BodyShape}/>
            <BodyStroke className={styles.BodyStroke}/>
            <SideBar/>
            
            <Parking data={data}/>
        </div>
    )
}
