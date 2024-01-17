import React from 'react'
import styles from './account.module.css'
import { MdLogout } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const Account = () => {
  return (
    <NavLink to='/' className={styles.cont}>
        <span>Log out</span>
        <span><MdLogout size={20}/></span>
    </NavLink>
  )
}

export default Account