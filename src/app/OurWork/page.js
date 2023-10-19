import React from "react";
import styles from "./page.module.css";
import IntroCont from "@/components/Cards/IntroCont";
import ContentCont from "@/components/Cards/ContentCont";
import WorkCategory from "@/components/ourworkCatgeory/WorkCategory";

export const metadata = {
  title: "ISH 24 Our Work",
  description: "Developer and Graphics Designer",
};

const OurWork =async () => {

  const introData = {
    id: 1,
    title1: "Projects & Outcomes",
    title2: "Explore our portfolio of successful projects.",
    img: "/working-01.png",
  };

  const topdata = {
    id: 1,
    header: "Why Partner with ISH 24?",
    info: "Our clients love working with our team. They are thrilled with our professionalism, quality of our work and the results they are getting with the technology we’ve built for them.",
  };

  const workCategorys=[
    {id:1,title:'Website',image:'website.jpg'},
    {id:2,title:'Application',image:'application.jpg'},
    {id:3,title:'Graphics',image:'bg.jpg'},
    {id:4,title:'Video',image:'videdit.jpg'},
  ]
  
  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <IntroCont {...introData} />
        <div className={styles.categorybox}>
        { workCategorys && workCategorys.map((list)=><WorkCategory key={list.id} {...list}/>)}
        </div>
        <div className={styles.applife}></div>
        <ContentCont data={topdata} />
      </div>
    </div>
  );
};

export default OurWork;
