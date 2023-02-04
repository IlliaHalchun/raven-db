import type { ReactElement } from "react"
import {Appearance, Button} from "../../UI/Button/Button";
import {Input} from "../../UI/Input/Input";
import styles from "./Header.module.css";

export interface HeaderProps {
    
}

export function Header(props: HeaderProps): ReactElement {
    return (
        <div className={styles.Header}>
            <Button appearance={Appearance.Light}>DELETE CURRENT PARKING</Button>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
        </div>
    )
}
