import React from "react";
import styles from "./page.module.css";
import TypingAnimation from "@/components/extras/TypingAnimation";
import { Url } from "@/helper/Url";

export const metadata = {
  title: "Our Work Project",
};

async function getProjects(id) {
  const res = await fetch(`${Url}/api/projects/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Detailpage =async ({ params }) => {

  const projects=await getProjects(params.detail)

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <div className={styles.imgbox}>
          <img src={`/${projects.image}`} />
        </div>
        <div className={styles.infobox}>
            <span>
          <TypingAnimation textData1={projects.title} textData2={`${projects.title} Project Overview`}/>
            </span>
          <div className={styles.infos}>
            {projects.intro}
          </div>
          <div className={styles.infos}>
            {projects.body}
          </div>
          <div className={styles.infos}>
            {projects.extra}
          </div>
          <div className={styles.infos}>
            {projects.conclusion}
          </div>
        </div>
        <div className={styles.toolsbox}>
          <span>Tool Used</span>
          <div className={styles.lists}>
            <button>React js</button>
            <button>Node js</button>
            <button>Mysql</button>
            <button>Stripe</button>
            <button>Git</button>
            <button>Cpanel</button>
          </div>
        </div>
        <div className={styles.linkbox}>
          <span>See Project</span>
          <a
            className={styles.bcode}
            href={projects.gitUrl}
            target="_blank"
          >
            Browse Code
          </a>
          <a
            className={styles.live}
            href={projects.liveUrl}
            target="_blank"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
