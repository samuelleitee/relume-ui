import styles from "./ContactForm.module.css"

export function ContactForm({ action, children }) {
  return <form action={action || null} className={styles.form}>{children}</form>;
}
