import styles from "./styles.module.css";

function Card({
  title,
  subtitle = "Default title",
  link = "https://google.com",
}) {
  return (
    <a
      href={link}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{subtitle}</p>
    </a>
  );
}

export default Card;
