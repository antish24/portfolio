import React from 'react'
import styles from './emptyprojectlis.module.css'
import Image from 'next/image'


const EmptyProjectList = ({img}) => {
  return (
    <div className={styles.cont}>
      <img src={`/${img}.png`} className={styles.imagebox}/>
      <span>Working On It</span>
    </div>
  )
}

export default EmptyProjectList