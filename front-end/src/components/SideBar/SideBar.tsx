import type { ReactElement } from "react"
import {Appearance, Button} from "../../UI/Button/Button"
import styles from "./SideBar.module.css"

export interface SideBarProps {
    
}

export function SideBar(props: SideBarProps): ReactElement {
    return (
        <div className={styles.SideBar}>
            <Button appearance={Appearance.Dark}/> 
            <Button appearance={Appearance.LightBlue}/> 
        </div>
    )
}
