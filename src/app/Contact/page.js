import React from 'react'
import styles from './page.module.css'
import IntroCont from '@/components/Cards/IntroCont';

export const metadata = {
  title: "ISH 24 Home",
  description: "Developer and Graphics Designer",
};

const Contact = () => {
  const introData = { id: 1, title1: "Contact Us, We would love to hear from you.",title2:'Contact Us, Get in touch with us today.', img: "/call.jpg" };

  return (
    <div className={styles.container}>
      <div className={styles.cont}>
      <IntroCont {...introData} />

      </div>
    </div>
  )
}

export default Contact