import React from "react";
import styles from "./page.module.css";
import { Url } from "@/helper/Url";
import ProjectCont from "@/components/Cards/ProjectCont";
import TypingAnimation from "@/components/extras/TypingAnimation";
import axios from "axios";
import EmptyProjectList from "@/components/extras/EmptyProjectList";

export async function generateMetadata({ params }) {
  return {
    title: `Our Work ${params.category}`,
  };
}

async function getProjects(category) {
  const res = await axios.post(`${Url}/api/projects/category`, {category:category});
  
  return res.data;
}

const CategoryPage = async ({params}) => {
  const projects = await getProjects(params.category);
  const Title = params.category;

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        {
          projects.length > 0 &&
          <div className={styles.topbox}>
        <TypingAnimation textData1={Title} textData2={`${Title} Works`} />
        </div>
        }
        {projects.length > 0 ?
      projects.map((list) => (
        <ProjectCont key={list._id} {...list} />
      ))
      :
      <EmptyProjectList img={params.category}/> 
      }
      </div>
    </div>
  );
};

export default CategoryPage;
