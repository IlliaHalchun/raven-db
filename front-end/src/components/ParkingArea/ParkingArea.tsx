import { ReactElement} from "react"
import {ParkingAreaDTO} from "../../dto/parkingArea.dto"
import {ReactComponent as DeleteSVG} from "./src/DeleteSVG.svg"
import styles from "./ParkingArea.module.css"
import cn from "classnames"
import {Appearance, Button} from "../../UI/Button/Button"
import {IEmptyParkingArea} from "../../common/emptyParkingArea.interface"
import {useTypedDispatch} from "../../redux/store"
import {setModal} from "../../redux/general/general.redux.slice"
import {Modal} from "../../common/modal.enum"

export interface ParkingAreaProps {
    parkingArea: ParkingAreaDTO | IEmptyParkingArea; 
}

export function ParkingArea( {parkingArea, ...props}: ParkingAreaProps): ReactElement {

    const dispatch = useTypedDispatch();

    const openCreateModal = () => {
        dispatch(setModal(Modal.Create))
    }
    
    return <>
        {parkingArea.data
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
                <Button onClick={openCreateModal} appearance={Appearance.Dark}>RENT</Button>
            </div>
        }
    </>
}
