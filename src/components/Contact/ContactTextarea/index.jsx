import styles from "./ContactTextarea.module.css";

export function ContactTextarea({ name }) {
  return (
    <label htmlFor={name} className={styles.message}>
      {name}
      <textarea
        name={name}
        id={name}
        placeholder="Type your message..."
        className={styles.textarea}
        
      ></textarea>
    </label>
  );
}
