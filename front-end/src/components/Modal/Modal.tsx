import type { ReactElement } from "react"
import {Appearance, Button} from "../../UI/Button/Button"
import {Div} from "../../UI/Div/Div"
import {Input} from "../../UI/Input/Input"
import styles from "./Modal.module.css"

export enum ModalType {
    Create,
    Update
}

export interface ModalProps {
    type: ModalType
}

export function Modal( {type, ...props}: ModalProps): ReactElement {
    return (
        <div className={styles.Wrapper}>
            <Div appearance={Appearance.Dark}>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Button appearance={Appearance.Light}>
                {type === ModalType.Create ? "CREATE" : "UPDATE"}
                </Button>
            </Div>
        </div>
    )
}
