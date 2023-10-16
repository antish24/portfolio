'use client'
import React, { useState } from 'react'
import styles from './contactus.module.css'
import { MdEmail, MdMessage, MdPerson } from 'react-icons/md'

const ContactUs = () => {
  const [namefocus,setnamefocus]=useState(false)
  const [emailfocus,setemailfocus]=useState(false)
  const [msgfocus,setmsgfocus]=useState(false)

  const [nameValue,setNameValue]=useState('')
  const [emailValue,setEmailValue]=useState('')
  const [msgValue,setMsgValue]=useState('')

  const handelMsg=()=>{
    console.log('hi')
    setEmailValue('')
    setMsgValue('')
    setNameValue('')
  }

  return (
    <form className={styles.formbox}>
      <h1>Get in Touch</h1>
      <div className={styles.namebox}>
        <span style={{display:namefocus || nameValue!==''?"none":"flex"}} className={styles.nameicon}><MdPerson/> Name</span>
        <input 
          onFocusCapture={()=>setnamefocus(true)} 
          value={nameValue} 
          onBlur={()=>setnamefocus(false)}
          onChange={(e)=>setNameValue(e.target.value)} 
          type='text' required/>
        </div>

        <div className={styles.namebox}>
        <span style={{display:emailfocus || emailValue!==''?"none":"flex"}} className={styles.nameicon}><MdEmail/> Email</span>
        <input 
          onFocusCapture={()=>setemailfocus(true)} 
          value={emailValue} 
          onBlur={()=>setemailfocus(false)}
          onChange={(e)=>setEmailValue(e.target.value)} 
          type='email' required/>
        </div>

        <div className={styles.msgbox}>
        <span style={{display:msgfocus || msgValue!==''?"none":"flex"}} className={styles.msgicon}><MdMessage/> Message</span>
        <textarea 
          onFocusCapture={()=>setmsgfocus(true)} 
          value={msgValue} 
          onBlur={()=>setmsgfocus(false)}
          onChange={(e)=>setMsgValue(e.target.value)} 
          maxLength={120}
           required/>
        </div>
        <button className={styles.sendbtn} onSubmit={handelMsg} disabled={!msgValue ||  !nameValue || !emailValue}>Submit</button>
    </form>
  )
}

export default ContactUs