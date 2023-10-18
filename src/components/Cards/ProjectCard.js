import React from 'react'
import styles from './projectcard.module.css'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const ProjectCard = (d) => {
  return (
    <div className={styles.cont} style={{background:`linear-gradient(to bottom, ${d.topColor}, ${d.bottomColor})`}}>
        <img className={styles.img} src={`/${d.logo}`}/>
        <div className={styles.info}>
            <span className={styles.head} style={{color:d.fontColor}}>{d.title}</span>
            <span className={styles.subhead} style={{color:d.fontColor}}>{d.subTitle}</span>
        </div>
        <div className={styles.view}>
            <Link href={`/OurWork/${d._id}`} style={{color:d.fontColor}} className={styles.viewbtn}><FaArrowRight size={30}/></Link>
        </div>
    </div>
  )
}

export default ProjectCard