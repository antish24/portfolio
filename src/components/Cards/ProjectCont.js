import React from 'react'
import styles from './projectcont.module.css'
import Link from 'next/link'

const ProjectCont = (data) => {
  return (
    <div className={styles.cont}>
        <img className={styles.left} src={data.logo} alt={data.title}/>
        <div className={styles.right}>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.info}>{data.extra}</div>
            <div className={styles.detail}><Link href={`/OurWork/${data._id}`} scroll={true} className={styles.casebtn}>CASE STUDY</Link><a href={data.liveUrl} target='_blank' className={styles.livebtn}>LIVE LINK</a></div>
        </div>
    </div>
  )
}

export default ProjectCont