import styles from "./ContactTerms.module.css"

export function ContactTerms({ name, hyperlink }) {
  return (
    <label htmlFor={name} className={styles.terms}>
      <input type="checkbox" name={name} id={name} />

      <span>
        {name} <a href={hyperlink} target="_blank">Terms</a>
      </span>
    </label>
  );
}
