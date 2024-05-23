import styles from "./ContactRoot.module.css";

export function ContactRoot({ children }) {
  return <div className={styles.container}>{children}</div>;
}
