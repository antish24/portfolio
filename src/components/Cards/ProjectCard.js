import React from 'react'
import styles from './projectcard.module.css'
import Link from 'next/link'

const ProjectCard = () => {
  return (
    <div className={styles.cont}>
        <div className={styles.img}></div>
        <div className={styles.info}>
            <span className={styles.head}>zaahirah</span>
            <span className={styles.subhead}>zirahzaahirah zaahirah</span>
        </div>
        <div className={styles.view}>
            <Link href={'/OurWork'} className={styles.viewbtn}>View Detail</Link>
        </div>
    </div>
  )
}

export default ProjectCard