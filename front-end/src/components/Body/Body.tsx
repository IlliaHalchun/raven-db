import type { ReactElement } from "react"
import styles from "./Body.module.css"
import {ReactComponent as BodyShape} from './src/Body.svg';
import {ReactComponent as BodyStroke} from './src/Body(Stroke).svg';
import {SideBar} from "../SideBar/SideBar";
import {Parking} from "../Parking/Parking";

export interface BodyProps {
    
}

export function Body(props: BodyProps): ReactElement {

    return (
        <div className={styles.Body}>
            <BodyShape className={styles.BodyShape}/>
            <BodyStroke className={styles.BodyStroke}/>
            <SideBar/>
            
            <Parking/>
        </div>
    )
}
