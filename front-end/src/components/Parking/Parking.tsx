import { ReactElement} from "react"
import styles from "./Parking.module.css"
import {ParkingArea} from "../ParkingArea/ParkingArea";
import {useTypedSelector} from "../../redux/store";
import {Loading} from "../../common/loading.enum";
import {Spinner} from "../../UI/Spinner/Spinner";

export interface ParkingProps {
}

export function Parking( { ...props}: ParkingProps): ReactElement {

    const parkingData = useTypedSelector(state => state.parking.currentParking);
    const parkingLoading = useTypedSelector(state => state.parking.currentParking.loading);

    return (
        <div className={styles.Parking}>
            {parkingLoading === Loading.Pending
                ? <Spinner className={styles.Spinner}/>
                : parkingData.data.map((parkingAreaData, index) => (
                <ParkingArea parkingArea={parkingAreaData} key={index}/>
                ))
            }
        </div>
    )
}


