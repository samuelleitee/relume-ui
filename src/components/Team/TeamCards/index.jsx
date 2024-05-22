import styles from "./TeamCards.module.css";

export function TeamCards({ children }) {
  return <div className={styles.container}>{children}</div>;
}
