import type { ReactElement } from "react"
import {Appearance, Button, TextSize} from "../../UI/Button/Button";
import {Div} from "../../UI/Div/Div";
import styles from "./Header.module.css";

export interface HeaderProps {
    
}

//  TODO: Figure out grid syntax
export function Header(props: HeaderProps): ReactElement {

    return (
        <div className={styles.Header}>
            <Button 
                style={{gridArea: "count"}} 
                appearance={Appearance.Light}
                textSize={TextSize.Small}
            >
                COUNT ENTIRE PARKING FEES
            </Button>
            <Button 
                style={{gridArea: "delete"}} 
                appearance={Appearance.Light}
                textSize={TextSize.Small}
            >
                DELETE CURRENT PARKING
            </Button>

            <Div
                appearance={Appearance.Light}
                style={{gridArea: "info"}}
            ></Div>
        </div>
    )
}
