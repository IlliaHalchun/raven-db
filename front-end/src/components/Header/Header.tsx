import type { ReactElement } from "react"
import {Modal} from "../../common/modal.enum";
import {setModal} from "../../redux/general/general.redux.slice";
import {setCurrentParkingAction} from "../../redux/parking/parking.redux.slice";
import {thunkChangeCurrentParking, thunkDeleteParking} from "../../redux/parking/parking.redux.thunk";
import {useTypedDispatch, useTypedSelector} from "../../redux/store";
import {Appearance, Button, TextSize} from "../../UI/Button/Button";
import {Div} from "../../UI/Div/Div";
import styles from "./Header.module.css";

export interface HeaderProps {
    
}

//  TODO: Figure out grid syntax
export function Header(props: HeaderProps): ReactElement {

    const currentParkingArea = useTypedSelector(state => state.parking.currentParkingArea);
    const currentParkingUrn = useTypedSelector(state => state.parking.currentParking.urn);
    const parkings = useTypedSelector(state => state.parking.parkings.data);

    const dispatch = useTypedDispatch();

    const openCalculateModal = () => {
        dispatch(setModal(Modal.Calculate));
    }


    const deleteCurrentParking = (urn) => {
        if(parkings.length <= 1) return;
        if(currentParkingUrn === parkings[0].urn)
            dispatch(thunkChangeCurrentParking(parkings[1].urn));
        else
            dispatch(thunkChangeCurrentParking(parkings[0].urn));
        dispatch(thunkDeleteParking(urn));
    }

    return (
        <div className={styles.Header}>
            <Button 
                onClick={openCalculateModal}
                style={{gridArea: "count"}} 
                appearance={Appearance.Light}
                textSize={TextSize.Small}
            >
                COUNT ENTIRE PARKING FEES
            </Button>
            <Button 
                onClick={() => deleteCurrentParking(currentParkingUrn)}
                style={{gridArea: "delete"}} 
                appearance={Appearance.Light}
                textSize={TextSize.Small}
            >
                DELETE CURRENT PARKING
            </Button>

            <Div
                className={styles.Info}
                appearance={Appearance.Light}
                style={{gridArea: "info"}}
            >
                <div>Name:<br/>{
                    currentParkingArea.data 
                        ? <p>{currentParkingArea.data.name}</p>
                        : "Hover parking area"
                }</div>
                <div>Discount:<br/>{
                    currentParkingArea.data 
                        ? <p>{currentParkingArea.data.discountPercentage}%</p>
                        : "0%"

                }</div>
                <div>Weekdays hourly rate:<br/>{
                    currentParkingArea.data 
                        ? <p>{currentParkingArea.data?.weekDaysRate}$</p>
                        : "0$"
                }</div>
                <div>Weekends hourly rate:<br/>{
                    currentParkingArea.data 
                        ? <p>{currentParkingArea.data.weekEndRate}$</p>
                        : "0$"
                }</div>
            </Div>
        </div>
    )
}
