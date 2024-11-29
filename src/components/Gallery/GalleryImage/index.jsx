import styles from "./GalleryImage.module.css"

export function GalleryImage({ src, alt }) {
    return <img className={styles.image} src={src} alt={alt} />
}