'use client'
import React, { useEffect, useState } from 'react'
import styles from './contactus.module.css'
import { MdEmail, MdMessage, MdPerson } from 'react-icons/md'
import { Url } from '@/helper/Url'
import axios from 'axios'

const ContactUs = () => {
  const [namefocus,setnamefocus]=useState(false)
  const [emailfocus,setemailfocus]=useState(false)
  const [msgfocus,setmsgfocus]=useState(false)

  const [nameValue,setNameValue]=useState('')
  const [emailValue,setEmailValue]=useState('')
  const [msgValue,setMsgValue]=useState('')

  const [tnxMsg,setTnxMsg]=useState('')
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setTnxMsg('')
    }, 6000);
  },[tnxMsg])


  const handelMsg = async () => {
    setLoading(true)
    try {
      const res = await axios.post(`${Url}/api/contact`, {nameValue,emailValue,msgValue});
      res && setTnxMsg('Thank You ,we wil get back to you')
      setEmailValue('')
      setMsgValue('')
      setNameValue('')
    } catch (err) {
      setTnxMsg('Try Again')
      console.log(err);
    }
    setLoading(false)
  };

  return (
    <div className={styles.formbox}>
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
        <span className={styles.errorbox} style={{display:tnxMsg===''?'none':'flex',fontWeight:'300',color:tnxMsg==='Try Again'?"red":"black"}}>{tnxMsg}</span>
        <button className={styles.sendbtn} onClick={handelMsg} disabled={!msgValue ||  !nameValue || !emailValue}>{loading?'Sending':'Send'}</button>
    </div>
  )
}

export default ContactUs