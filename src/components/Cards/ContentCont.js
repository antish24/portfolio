import React from "react";
import styles from "./contentcont.module.css";
import HomePageCard from "./HomePageCard";
import ProjectCard from "./ProjectCard";
import CountCard from "./CountCard";
import Testimonial from "../testimoney/Testimonial";
import ToolsCard from "./ToolsCard";
import BrandsCont from "./BrandsCont";

const ContentCont = ({data,work,brand,project,counts,testmony,tools}) => {
  return (
    <div className={styles.cont}>
      <div className={styles.topbox}>
        <div className={styles.header}>
          <span className={styles.line}></span>
          <span className={styles.title}>{data.header}</span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.info}>{data.info && data.info}</div>
      </div>
      <div className={styles.bodybox}>
      {work && work.map((list)=><HomePageCard key={list.id} {...list}/>)}
      <BrandsCont brands={brand}/>
      {/* {brand && brand.map((list)=><img className={styles.brandimg} key={list._id} src={`/${list.partnerLogo}`} alt={list.partnerName}/>)} */}
      {project && project.map((list)=><ProjectCard key={list._id} {...list}/>)}
      {counts && counts.map((list)=><CountCard key={list.id} {...list}/>)}
      {testmony &&<Testimonial testmony={testmony}/>}
      {tools && tools.map((list)=><ToolsCard key={list._id} {...list}/>)}
      </div>
    </div>
  );
};

export default ContentCont;
