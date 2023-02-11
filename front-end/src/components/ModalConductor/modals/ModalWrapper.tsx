import {MouseEvent} from "react";
import type { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react"
import styles from "./ModalWrapper.module.css"

export interface ModalWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    closeHandler: Function
}

export function ModalWrapper(props: ModalWrapperProps): ReactElement {

    const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.target === e.currentTarget) props.closeHandler();
    };

    return <div onClick={handleBackgroundClick} className={styles.ModalWrapper}>{props.children}</div>
}
