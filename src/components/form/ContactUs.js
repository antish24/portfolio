import React from 'react'
import styles from './contactus.module.css'
const ContactUs = () => {
  return (
    <div className={styles.formbox}>
        <span>Phone</span><input type='tel'/>
        <span>Email</span><input type='email'/>
        <span>Message</span><textarea/>
    </div>
  )
}

export default ContactUs