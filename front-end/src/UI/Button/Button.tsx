import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, ReactNode } from "react"
import styles from "./Button.module.css"
import cn from "classnames"

export enum Appearance {
    Light,
    Dark
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: Appearance,
    children?: ReactNode
}

export function Button({appearance, children, ...props}: ButtonProps): ReactElement {
    

    return (
        <button
            className={
                cn(styles.Button, {
                [styles.Light]: appearance === Appearance.Light,
                [styles.Dark]: appearance === Appearance.Dark
                })
            }
            {...props}
        >
            {children} 
        </button>
    )
}
