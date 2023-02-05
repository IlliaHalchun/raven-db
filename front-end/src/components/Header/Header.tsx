import type { ReactElement } from "react"
import {Appearance, Button, TextSize} from "../../UI/Button/Button";
import {Input} from "../../UI/Input/Input";
import styles from "./Header.module.css";

export interface HeaderProps {
    
}

export function Header(props: HeaderProps): ReactElement {
    return (
        <div className={styles.Header}>
            <Button 
                style={{gridArea: "button"}} 
                appearance={Appearance.Light}
                textSize={TextSize.Big}
            >
                DELETE CURRENT PARKING
            </Button>

            {/* TODO: Figure out syntax */}
            <Input style={{gridArea: "name"}} placeholder="Name..."/>
            <Input style={{gridArea: "discount"}} placeholder="Discount percentage..."/>
            <Input style={{gridArea: "weekdays"}} placeholder="Weekdays hourly rate..."/>
            <Input style={{gridArea: "weekend"}} placeholder="Weekends hourly rate..."/>
        </div>
    )
}
