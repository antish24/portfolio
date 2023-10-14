import React from 'react'
import styles from './intro.module.css'

const IntroCont = (data) => {
  return (
    <div className={styles.cont}>
        <div className={styles.left}>{data.title}</div>
        <img src={data.img} alt='Intro' className={styles.right}/>
    </div>
  )
}

export default IntroCont