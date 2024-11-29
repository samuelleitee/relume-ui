import styles from "./GalleryTitle.module.css"

export function GalleryTitle({ heading, text }) {
    return (
        <section className={styles.title}>
            <h1>{heading}</h1>
            <span>{text}</span>
        </section>
    )
}