import type { ReactElement } from "react"
import {Appearance, Button, TextSize} from "../../UI/Button/Button"
import {ReactComponent as PlusSVG} from "./src/Plus.svg"
import styles from "./SideBar.module.css"

export interface SideBarProps {
    
}

export function SideBar(props: SideBarProps): ReactElement {
    return (
        <div className={styles.SideBar}>
            <Button appearance={Appearance.Dark} textSize={TextSize.Big}>1</Button> 
            <Button appearance={Appearance.LightBlue}>
                <PlusSVG className={styles.PlusSVG}/>
            </Button>
        </div>
    )
}
