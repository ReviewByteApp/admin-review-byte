import React from 'react'
import styles from './cardreview.module.css'
import { FaArrowRight } from 'react-icons/fa'
const CardReview = () => {
  return (
    <div className={styles.cont}>
        <span>usernameusername12245@gmail.com</span>
        <span>03 aug 23</span>
        <span>adama</span>
        <span>5</span>
        <span><FaArrowRight/></span>
    </div>
  )
}

export default CardReview