import styles from "./TeamHeadline.module.css"

export function TeamHeadline({ heading, subheading, description }) {
  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>Tagline</p>
      <h2 className={styles.title}>Our team</h2>
      <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
  );
}
