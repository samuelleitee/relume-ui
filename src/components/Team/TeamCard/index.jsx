import EmptyImage from "../../../assets/empty_image.png";
import styles from "./TeamCard.module.css";

export function TeamCard({ fullname, jobTitle, description, children }) {
  return (
    <div className={styles.container}>
      <img src={EmptyImage} alt="Empty Image" />

      <div>
        <p className={styles.fullname}>{fullname}</p>
        <p className={styles.jobTitle}>{jobTitle}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <div>{children}</div>
    </div>
  );
}
