import React from 'react'
import styles from './tools.module.css'

const ToolsCard = (data) => {
  return (
    <div className={styles.cont}>
      {data.img}
    </div>
  )
}

export default ToolsCard