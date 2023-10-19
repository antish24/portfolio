import React from "react";
import styles from "./tools.module.css";
const ToolsCard = (data) => {
  return (
    <div className={styles.cont}>
      <div className={styles.logo}>
        {data.logo}
      </div>
    </div>
  );
};

export default ToolsCard;
