import {DetailedHTMLProps, HTMLAttributes, ReactElement, useState} from "react"
import {ParkingAreaCreateDTO} from "../../../../dto/parkingArea.create.dto"
import { closeModal } from "../../../../redux/general/general.redux.slice"
import {thunkCreateParkingArea} from "../../../../redux/parking/parking.redux.thunk"
import {useTypedDispatch, useTypedSelector} from "../../../../redux/store"
import {Appearance, Button} from "../../../../UI/Button/Button"
import {Div} from "../../../../UI/Div/Div"
import {Input} from "../../../../UI/Input/Input"
import { ModalWrapper } from "../ModalWrapper"
import styles from "./CreateModal.module.css"

export interface CreateModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export function CreateModal( {children, ...props}: CreateModalProps): ReactElement {
    
    const dispatch = useTypedDispatch();
    const currentPosition = useTypedSelector(state => state.parking.currentParkingArea.position);
    const currentParkingUrn = useTypedSelector(state => state.parking.currentParking.urn);
    const [name, setName] = useState("");
    const [discount, setDiscount] = useState("");
    const [weekdays, setWeekdays] = useState("");
    const [weekend, setWeekend] = useState("");

    const createParking = () => {
        const data: ParkingAreaCreateDTO = {
            position: currentPosition,
            data: {
                name,
                discountPercentage: +discount,
                weekDaysRate: +weekdays,
                weekEndRate: +weekend
            }
        }
        dispatch(thunkCreateParkingArea(data, currentParkingUrn))
        dispatch(closeModal())
    }

    const onWrapperClick = () => {
        dispatch(closeModal())
    }

    return (
        <ModalWrapper {...props} closeHandler={onWrapperClick}> 
            <Div className={styles.Modal} appearance={Appearance.Dark}>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name..."/> 
                <Input value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Discount..."/> 
                <Input value={weekdays} onChange={(e) => setWeekdays(e.target.value)} placeholder="Weekdays hourly rate"/> 
                <Input value={weekend} onChange={(e) => setWeekend(e.target.value)} placeholder="Weekends hourly rate"/> 
                <Button onClick={createParking} className={styles.Button} appearance={Appearance.Light}>Create</Button>
            </Div>
        </ModalWrapper>
    )
}
