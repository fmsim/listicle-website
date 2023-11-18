"use client";
import { useState } from "react";
import styles from "./styles.module.css";

function Card({
  title,
  subtitle = "Default title",
  link = "https://google.com",
}) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((currentState) => currentState + 1);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{subtitle}</p>
      <p>Clicked count: {clickCount}</p>
    </div>
  );
}

export default Card;
