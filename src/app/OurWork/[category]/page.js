import React from "react";
import styles from "./page.module.css";
import { Url } from "@/helper/Url";
import ProjectCont from "@/components/Cards/ProjectCont";
import TypingAnimation from "@/components/extras/TypingAnimation";

export async function generateMetadata({ params }) {
  return {
    title: `Our Work ${params.category}`,
  };
}

async function getProjects() {
  const res = await fetch(`${Url}/api/projects`, 
    { next: { revalidate: 3600 } 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CategoryPage = async ({params}) => {
  const projects = await getProjects();
  const Title = params.category;

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <div className={styles.topbox}>
        <TypingAnimation textData1={Title} textData2={`${Title} Works`} />
        </div>
        {projects.map((list) => (
          <ProjectCont key={list._id} {...list} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
