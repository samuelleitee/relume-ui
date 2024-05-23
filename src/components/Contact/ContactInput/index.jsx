import styles from "./ContactInput.module.css";

export function ContactInput({ name, type, placeholder }) {
  return (
    <label htmlFor={name} className={styles.input}>
      {name}
      <input type={type} name={name} id={name} placeholder={placeholder}/>
    </label>
  );
}
