'use client'
import React from 'react'
import styles from './getintouch.module.css'

const GetInTouch = () => {
  return (
    <div onClick={() => window.location.href = `tel:${'+251934608749'}`} className={styles.call}>Call Us +251 934 60 87 49</div>
  )
}

export default GetInTouch