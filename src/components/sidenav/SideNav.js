import React from 'react'
import styles from './sidenav.module.css'
import { NavLink } from 'react-router-dom'
import { FaGrimace, FaHome, FaMailBulk, FaUpload } from 'react-icons/fa'
const SideNav = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.logo}></div>
        <NavLink to='/'><FaHome size={20}/>Home</NavLink>
        <NavLink to='/'><FaMailBulk size={20}/>Review</NavLink>
        <NavLink to='/'><FaUpload size={20}/>Post</NavLink>
        <NavLink to='/'><FaGrimace size={20}/>Analytics</NavLink>
        <NavLink to='/'>Settings</NavLink>
    </div>
  )
}

export default SideNav