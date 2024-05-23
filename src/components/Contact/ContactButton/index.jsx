import styles from "./ContactButton.module.css";

export function ContactButton({ text, type }) {
  return <button type={type} className={styles.button}>{text}</button>;
}
