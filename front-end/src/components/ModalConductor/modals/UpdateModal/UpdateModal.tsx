import type { DetailedHTMLProps, HTMLAttributes, ReactElement} from "react"
import {closeModal} from "../../../../redux/general/general.redux.slice"
import {useTypedDispatch} from "../../../../redux/store"
import {Appearance, Button} from "../../../../UI/Button/Button"
import {Div} from "../../../../UI/Div/Div"
import { ModalWrapper } from "../ModalWrapper"
import {Input} from "../../../../UI/Input/Input"
import styles from "./UpdateModal.module.css"

export interface UpdateModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export function UpdateModal( {children, ...props}: UpdateModalProps): ReactElement {
    
    const dispatch = useTypedDispatch();

    const onWrapperClick = () => {
        dispatch(closeModal())
    }

    return (
        <ModalWrapper {...props} className={styles.Wrapper} closeHandler={onWrapperClick}>
            <Div appearance={Appearance.Dark}>
                <Input placeholder="Name..."/> 
                <Input placeholder="Discount..."/> 
                <Input placeholder="Weekdays hourly rate"/> 
                <Input placeholder="Weekends hourly rate"/> 
                <Button appearance={Appearance.Light}>UPDATE</Button>
            </Div>
        </ModalWrapper>
    )
}
