import React from 'react'
import styles from './projectcont.module.css'

const ProjectCont = (data) => {
  return (
    <div className={styles.cont}>
        <img className={styles.left} src={data.image} alt={data.title}/>
        <div className={styles.right}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.info}>{data.info}</div>
            <div className={styles.detail}><button className={styles.casebtn}>CASE STUDY</button><a href={data.url} target='_blank' className={styles.livebtn}>LIVE LINK</a></div>
        </div>
    </div>
  )
}

export default ProjectCont