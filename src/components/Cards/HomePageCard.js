import React from "react";
import styles from "./HomePageCard.module.css";

const HomePageCard = (data) => {
  return (
    <div className={styles.cont}>
      <div className={styles.image}>{data.img}</div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.content}>{data.content}</div>
    </div>
  );
};

export default HomePageCard;
