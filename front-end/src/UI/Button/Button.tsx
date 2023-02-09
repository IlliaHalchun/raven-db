import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, ReactNode } from "react"
import styles from "./Button.module.css"
import cn from "classnames"

export enum Appearance {
    Light,
    Dark,
    LightBlue,
    DarkBlue
}

export enum TextSize {
    Big,
    Small
}

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: Appearance,
    className?: string,
    textSize?: TextSize,
    children?: ReactNode
}

export function Button({appearance, className = "", textSize = TextSize.Small, children, ...props}: ButtonProps): ReactElement {
    

    return (
        <button
            className={
                cn(styles.Button, className, {
                [styles.Light]: appearance === Appearance.Light,
                [styles.Dark]: appearance === Appearance.Dark,
                [styles.LightBlue]: appearance === Appearance.LightBlue,
                [styles.DarkBlue]: appearance === Appearance.DarkBlue,
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
