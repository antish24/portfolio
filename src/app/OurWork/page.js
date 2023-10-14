import React from 'react'
import styles from './page.module.css'
import IntroCont from '@/components/Cards/IntroCont';
import ContentCont from '@/components/Cards/ContentCont';
import ProjectCard from '@/components/Cards/ProjectCard';

export const metadata = {
  title: "ISH 24 Our Work",
  description: "Developer and Graphics Designer",
};

const OurWork = () => {

  const introData={id:1,title:"Projects & Outcomes",img:"/working-01.png"}
  
  const topdata = {
    id: 1,
    header: "Why Partner with ISH 24?",
    info: "Our clients love working with our team. They are thrilled with our professionalism, quality of our work and the results they are getting with the technology we’ve built for them.",
  };

  const projects=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
  ]
  
  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <IntroCont {...introData}/>
        <div className={styles.projectslist}>
          {projects.map((list)=><ProjectCard key={list.id}/>)}
        </div>
        <div className={styles.applife}></div>
        <ContentCont data={topdata} />
      </div>
    </div>
  )
}

export default OurWork