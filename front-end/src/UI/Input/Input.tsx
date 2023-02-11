import type { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from "react"
import styles from "./Input.module.css"
import cn from "classnames"

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string
}

export function Input({placeholder = "", ...props}: InputProps): ReactElement {
    return (
        <input 
            {...props}
            type="text" 
            placeholder={placeholder}
            className={
                cn(styles.Input)
            }
        />
    )
}
