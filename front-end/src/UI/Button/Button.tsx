import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, ReactNode } from "react"
import styles from "./Button.module.css"
import cn from "classnames"

export enum Appearance {
    Light,
    Dark,
    LightBlue
}

export enum TextSize {
    Big,
    Small
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: Appearance,
    textSize?: TextSize,
    children?: ReactNode
}

export function Button({appearance, textSize = TextSize.Small, children, ...props}: ButtonProps): ReactElement {
    

    return (
        <button
            className={
                cn(styles.Button, {
                [styles.Light]: appearance === Appearance.Light,
                [styles.Dark]: appearance === Appearance.Dark,
                [styles.LightBlue]: appearance === Appearance.LightBlue,
                [styles.BigText]: textSize === TextSize.Big,
                [styles.SmallText]: textSize === TextSize.Small
                })
            }
            {...props}
        >
            {children} 
        </button>
    )
}
