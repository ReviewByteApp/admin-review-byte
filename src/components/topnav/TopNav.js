import React from 'react'
import styles from './topnav.module.css'
import {useLocation} from 'react-router-dom'

const TopNav = () => {
  const {pathname}=useLocation()

  return (
    <div className={styles.cont}>
      <div className={styles.leftbox}></div>
      <div className={styles.rightbox}>
        <span className={styles.navname}>{pathname.substring(1)}</span>
        <div className={styles.minnav}>
          <button>add</button>
          <button>add2</button>
          <button>add3</button>
        </div>
      </div>
    </div>
  )
}

export default TopNav