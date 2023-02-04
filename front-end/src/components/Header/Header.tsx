import type { ReactElement } from "react"
import styles from "./Header.module.css";

export interface HeaderProps {
    
}

export function Header(props: HeaderProps): ReactElement {
    return (
        <div className={styles.Header}>
        </div>
    )
}
