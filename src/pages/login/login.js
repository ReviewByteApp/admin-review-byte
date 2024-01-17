import React, { useState } from 'react'
import styles from './login.module.css'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { NavLink ,useNavigate} from 'react-router-dom'

const Login = () => {

  const [showPassword,setShowPassword]=useState(false)
  const navigate=useNavigate()
  const loginFun =async(e)=>{
    e.preventDefault()
    alert('fuck you')
    navigate('/dashboard')
  }

  return (
    <div className={styles.cont}>
      <form onSubmit={loginFun} className={styles.logincont}>
        <span className={styles.title}>Login to your Account</span>
        <span className={styles.subtitle}>Don't have an Account<NavLink to='/register'>Register</NavLink></span>
        <div className={styles.inputbox}>
          <span className={styles.field}>Email</span>
          <input required className={styles.input} maxLength={40} type='email'/>
        </div>
        <div className={styles.inputbox}>
          <span className={styles.field}>Password</span>
            <input required className={styles.input} maxLength={30} type={showPassword?'text':'password'}/>
            <span className={styles.showpass}>{showPassword?
            <FaEyeSlash onClick={()=>setShowPassword(false)}/>
            :
            <FaEye onClick={()=>setShowPassword(true)}/>
            }
            </span>
        </div>
        <span className={styles.forget}>Forgot password</span>
        <button type='submit'>Login</button>
      </form>
      <div className={styles.right}></div>
    </div>
  )
}

export default Login