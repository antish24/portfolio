import React from "react";
import styles from "./page.module.css";
import IntroCont from "@/components/Cards/IntroCont";
import ContentCont from "@/components/Cards/ContentCont";
import ProjectCont from "@/components/Cards/ProjectCont";
import { Url } from "@/helper/Url";

export const metadata = {
  title: "ISH 24 Our Work",
  description: "Developer and Graphics Designer",
};

async function getProjects() {
  const res = await fetch(`${Url}/api/projects`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const OurWork =async () => {
  const projects=await getProjects()
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

  

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <IntroCont {...introData} />
        {projects.map((list) => (
          <ProjectCont key={list._id} {...list} />
        ))}
        <div className={styles.applife}></div>
        <ContentCont data={topdata} />
      </div>
    </div>
  );
};

export default OurWork;
