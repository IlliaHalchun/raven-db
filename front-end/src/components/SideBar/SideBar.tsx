import { ReactElement, useEffect} from "react"
import {Appearance, Button} from "../../UI/Button/Button"
import {ReactComponent as PlusSVG} from "./src/Plus.svg"
import styles from "./SideBar.module.css"
import {useTypedDispatch, useTypedSelector} from "../../redux/store"
import {initParking} from "../../redux/parking/parking.redux.init"

export interface SideBarProps {
    
}

export function SideBar(props: SideBarProps): ReactElement {
    const parkings = useTypedSelector(state => state.parking.parkings.data);
    const currentParkingUrn = useTypedSelector(state => state.parking.currentParkingUrn);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(initParking());
    }, [])

    return (
        <div className={styles.SideBar}>
            {parkings.map((parking, index) => (
                parking.urn === currentParkingUrn
                    ? <Button appearance={Appearance.DarkBlue} key={parking.urn}>{index + 1}</Button>
                    : <Button appearance={Appearance.Dark} key={parking.urn}>{index + 1}</Button>
            ))}
            <Button appearance={Appearance.LightBlue}>{<PlusSVG className={styles.PlusSVG}/>}</Button> 
         </div>
    )
}

