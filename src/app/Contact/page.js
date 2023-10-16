import React from 'react'
import styles from './page.module.css'
import IntroCont from '@/components/Cards/IntroCont';
import ContactUs from '@/components/form/ContactUs';
import FAQ from '@/components/extras/FAQ';
import CallBtn from '@/components/button/CallBtn';

export const metadata = {
  title: "ISH 24 Home",
  description: "Developer and Graphics Designer",
};

const Contact = () => {
  const introData = { id: 1, title1: "Contact Us, We would love to hear from you.",title2:'Contact Us, We would love to hear from you.', img: "/contact-01.png" };

  return (
    <div className={styles.container}>
      <div className={styles.cont}>
      <IntroCont {...introData} />
      <div className={styles.callbtn}>
      <CallBtn/>
      </div>
      <ContactUs/>
      <FAQ/>
      </div>
    </div>
  )
}

export default Contact