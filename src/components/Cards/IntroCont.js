import React from 'react'
import styles from './intro.module.css'
import TypingAnimation from '../extras/TypingAnimation'

const IntroCont = (data) => {
  return (
    <div className={styles.cont}>
        <div className={styles.left}><TypingAnimation textData1={data.title1} textData2={data.title2}/></div>
        <img src={data.img} alt='Intro' className={styles.right}/>
    </div>
  )
}

export default IntroCont