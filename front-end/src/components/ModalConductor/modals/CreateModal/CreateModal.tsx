import type {DetailedHTMLProps, HTMLAttributes, ReactElement} from "react"
import { closeModal } from "../../../../redux/general/general.redux.slice"
import {useTypedDispatch} from "../../../../redux/store"
import {Appearance, Button} from "../../../../UI/Button/Button"
import {Div} from "../../../../UI/Div/Div"
import {Input} from "../../../../UI/Input/Input"
import { ModalWrapper } from "../ModalWrapper"
import styles from "./CreateModal.module.css"

export enum ModalType {
    Create,
    Update
}

export interface CreateModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export function CreateModal( {children, ...props}: CreateModalProps): ReactElement {
    
    const dispatch = useTypedDispatch();

    const onWrapperClick = () => {
        dispatch(closeModal())
    }

    return (
        <ModalWrapper {...props} closeHandler={onWrapperClick}> 
            <Div className={styles.Modal} appearance={Appearance.Dark}>
                <Input placeholder="Name..."/> 
                <Input placeholder="Discount..."/> 
                <Input placeholder="Weekdays hourly rate"/> 
                <Input placeholder="Weekends hourly rate"/> 
                <Button className={styles.Button} appearance={Appearance.Light}>Create</Button>
            </Div>
        </ModalWrapper>
    )
}
