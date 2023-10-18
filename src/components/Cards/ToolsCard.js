import React from "react";
import styles from "./tools.module.css";

const ToolsCard = (data) => {
  return (
    <div className={styles.cont}>
      <span>{data.name}</span>
      <img src={`/${data.logo}`}/>
    </div>
  );
};

export default ToolsCard;
