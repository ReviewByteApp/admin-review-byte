import React, { useState } from 'react'
import styles from './login.module.css'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const Login = () => {

  const [showPassword,setShowPassword]=useState(false)

  const loginFun =async(e)=>{
    e.preventDefault()
    alert('fuck')
  }

  return (
    <div className={styles.cont}>
      <form className={styles.formbox} onSubmit={loginFun}>
        <h1>Login</h1>
        <input type='email' placeholder='Business Email' required/>
        <div className={styles.passbbox}>
        <input type={showPassword?'text':'password'} placeholder='Password' minLength={8} required/>
        <span className={styles.showpassbox}>
        {showPassword?
        <FaEyeSlash onClick={()=>setShowPassword(false)}/>:
        <FaEye onClick={()=>setShowPassword(true)}/>}
        </span>
        </div>
        <NavLink to='/home'>Login</NavLink>
      </form>
      <div className={styles.leftbox}></div>
    </div>
  )
}

export default Login