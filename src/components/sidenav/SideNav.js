import React from 'react'
import styles from './sidenav.module.css'
import { NavLink } from 'react-router-dom'
import { FaGrimace, FaHome, FaMailBulk, FaUpload } from 'react-icons/fa'
import { GiSettingsKnobs } from "react-icons/gi";

const SideNav = () => {
  return (
    <div className={styles.cont}>
      <span className={styles.logo}></span>
        <NavLink to='/home'><FaHome size={20}/>Home</NavLink>
        <NavLink to='/'><FaMailBulk size={20}/>Review</NavLink>
        <NavLink to='/'><FaUpload size={20}/>Post</NavLink>
        <NavLink to='/'><FaGrimace size={20}/>Analytics</NavLink>
        <NavLink to='/setting'><GiSettingsKnobs size={20}/>Settings</NavLink>
    </div>
  )
}

export default SideNav