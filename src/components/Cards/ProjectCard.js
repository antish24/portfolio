import React from 'react'
import styles from './projectcard.module.css'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const ProjectCard = (d) => {
  return (
    <div className={styles.cont} style={{background:`linear-gradient(to bottom, ${d.top}, ${d.bottom})`}}>
        <img className={styles.img} src={d.img}/>
        <div className={styles.info}>
            <span className={styles.head} style={{color:d.color}}>{d.title}</span>
            <span className={styles.subhead} style={{color:d.color}}>{d.subhead}</span>
        </div>
        <div className={styles.view}>
            <Link href={`/OurWork/${d.title}`} style={{color:d.color}} className={styles.viewbtn}><FaArrowRight size={30}/></Link>
        </div>
    </div>
  )
}

export default ProjectCard