import type { ReactElement } from "react"
import {Modal} from "../../common/modal.enum"
import {CreateModal} from "./modals/CreateModal/CreateModal"
import {UpdateModal} from "./modals/UpdateModal/UpdateModal"

export interface ModalConductorProps {
    modalType: Modal 
}

export function ModalConductor( {modalType, ...props}: ModalConductorProps): ReactElement {
    
    const chooseModal = (modalType: Modal) => {
        switch(modalType) {
            case Modal.Create: 
                return <CreateModal/>;
            case Modal.Update:
                return <UpdateModal/>;
            case Modal.None:
                return <></>;
        }
    }

    return chooseModal(modalType);
}
