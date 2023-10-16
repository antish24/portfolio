'use client'
import React from 'react'
import { MdCall } from 'react-icons/md'
import styles from './callbtn.module.css'

const CallBtn = () => {
  return (
    <div className={styles.cont} onClick={()=>window.location.href = `tel:${'+251934608749'}`}>
    <MdCall  size={80} className={styles.icon}/>
    Call us
    </div>
  )
}

export default CallBtn