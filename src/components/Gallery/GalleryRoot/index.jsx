import styles from "./GalleryRoot.module.css"

export function GalleryRoot({ children }) {
    return <div className={styles.container}>{children}</div>
}