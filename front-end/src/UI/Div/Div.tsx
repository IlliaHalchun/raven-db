import type { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from "react"
import styles from "./Div.module.css"
import cn from "classnames"
import {Appearance} from "../Button/Button"

export interface DivProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string
    appearance: Appearance
    children?: ReactNode 
}

export function Div( {children, className = "", appearance, ...props}: DivProps): ReactElement {
    return (
        <div 
            className={
                cn(styles.Div, className, {
                    [styles.Light]: appearance === Appearance.Light,
                    [styles.Dark]: appearance === Appearance.Dark
                })
            }
            {...props}
        >
            {children}
        </div>
    )
}
