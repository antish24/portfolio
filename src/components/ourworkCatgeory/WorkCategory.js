'use client'
import React, { useState } from "react";
import styles from "./workcategory.module.css";
import Link from "next/link";
import Image from "next/image";

const WorkCategory = (data) => {
  const [loading,setLoading]=useState(true)
  return (
    <Link
      href={`/OurWork/${data.title}`}
      scroll={true}
      className={styles.cont}
      // style={{ background: `url(/${data.image})`, backgroundSize: "cover" }}
    >
      <Image src={`/${data.image}`} width={loading?10:100} height={loading?10:100} quality={loading?1:100} onLoadingComplete={()=>setLoading(false)} className={styles.bgimg}/>
      <span className={styles.title}>{data.title}</span>
    </Link>
  );
};

export default WorkCategory;
