import type { ReactElement } from "react"
import {Appearance} from "../../UI/Button/Button"
import {Div} from "../../UI/Div/Div"

export interface PopUpProps {
    trigger: boolean 
}

export function PopUp( {trigger, ...props}: PopUpProps): ReactElement {
    return <>
        {
        trigger
            ? <Div appearance={Appearance.Dark}>
            
            </Div>
            : null
        }
    </>
}
