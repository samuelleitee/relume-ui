import styles from "./ContactHeadline.module.css";

export function ContactHeadline({ heading, subheading, description }) {
  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>Tagline</p>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
