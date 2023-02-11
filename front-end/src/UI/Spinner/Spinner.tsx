import type { ReactElement } from "react"
import styles from  "./Spinner.module.css"
import cn from "classnames"

export interface SpinnerProps {
    className?: string
}

export function Spinner( {className, ...props}: SpinnerProps): ReactElement {
    return  (
        <div className={cn(styles.Spinner, className)}>
            <div className={styles.Bounce1}></div>
            <div className={styles.Bounce2}></div>
            <div className={styles.Bounce3}></div>
        </div>
    )
}
