import React from 'react'
import styles from './cardreview.module.css'
import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const CardReview = () => {
  return (
    <div className={styles.cont}>
        <span>usernameusername12245@gmail.com</span>
        <span>03 aug 23</span>
        <span>adama</span>
        <span>5</span>
        <span><NavLink to={`/reviews/${'name'}`}><FaArrowRight/></NavLink></span>
    </div>
  )
}

export default CardReview