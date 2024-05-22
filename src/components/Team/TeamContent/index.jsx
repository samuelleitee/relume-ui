import styles from "./TeamContent.module.css"

export function TeamContent({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}