import styles from "./TeamRoot.module.css";

export function TeamRoot({ children }) {
  return <div className={styles.container}>{children}</div>;
}
