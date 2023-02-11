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
import {setCurrentParkingAreaAction} from "../../redux/parking/parking.redux.slice"
import {thunkDeleteParkingArea} from "../../redux/parking/parking.redux.thunk"

export interface ParkingAreaProps {
    parkingArea: ParkingAreaDTO | IEmptyParkingArea; 
}

export function ParkingArea( {parkingArea, ...props}: ParkingAreaProps): ReactElement {

    const dispatch = useTypedDispatch();

    const setCurrentParkingArea = (data: ParkingAreaDTO | IEmptyParkingArea) => {
        dispatch(setCurrentParkingAreaAction(data))
    }

    const deleteParkingArea = (urn: string) => {
        dispatch(thunkDeleteParkingArea(urn)) 
    }

    const openCreateModal = () => {
        dispatch(setModal(Modal.Create))
    }
    
    return <>
        {parkingArea.data
            ? <div 
                onMouseEnter={() => setCurrentParkingArea(parkingArea)} 
                onMouseLeave={() => setCurrentParkingArea({position: 0, data: null})}
                className={cn(styles.ParkingArea, styles.Reserved)}
            >
                <Button appearance={Appearance.Dark}>COUNT PARKING FEES</Button>
                <Button 
                    className={styles.DeleteButton}
                    appearance={Appearance.Dark}
                    onClick={() => deleteParkingArea(parkingArea.data.urn)}
                >
                    <DeleteSVG className={styles.DeleteSVG}/>
                </Button>
            </div> 
            : <div 
                onMouseEnter={() => setCurrentParkingArea(parkingArea)}
                className={cn(styles.ParkingArea, styles.NotReserved)}
            >
                <Button onClick={openCreateModal} appearance={Appearance.Dark}>RENT</Button>
            </div>
        }
    </>
}
