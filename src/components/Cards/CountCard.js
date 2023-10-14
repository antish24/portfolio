"use client";
import React, { useEffect, useState } from "react";
import styles from "./countcard.module.css";

const CountCard = (d) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < d.count) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Adjust the interval (in milliseconds) for counting speed

      return () => {
        clearInterval(timer);
      };
    }
  }, [count, d.count]);

  return (
    <div className={styles.box}>
      <span>{d.icon}</span>
      <span>{count}</span>
      <span>{d.name}</span>
    </div>
  );
};

export default CountCard;
