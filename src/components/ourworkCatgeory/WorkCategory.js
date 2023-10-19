import React from "react";
import styles from "./workcategory.module.css";
import Link from "next/link";

const WorkCategory = (data) => {
  return (
    <Link
      href={`/OurWork/${data.title}`}
      scroll={true}
      className={styles.cont}
      style={{ background: `url(/${data.image})`, backgroundSize: "cover" }}
    >
      <span className={styles.title}>{data.title}</span>
    </Link>
  );
};

export default WorkCategory;
