import React, { useContext } from 'react'
import styles from './topnav.module.css'
import {useLocation} from 'react-router-dom'
import { FaArrowRight, FaInfo, FaList, FaMailBulk, FaUser } from 'react-icons/fa'
import { SideNavContext } from '../../context/SideNavShow'

const TopNav = () => {
  const {pathname}=useLocation()
  const { extendNav,setExtendNav,setShowNav,LessThan1000,LessThan800} = useContext(SideNavContext);

  return (
    <div className={styles.cont}>
      <div className={styles.leftbox} style={{width:LessThan1000 ? extendNav?"250px":'60px':'250px',display:LessThan800?"none":'flex'}}>
        {LessThan1000 ?
          ( extendNav ?
           <span style={{fontSize:'14px',cursor:'pointer'}}>reviewbyte@gmail.com</span>
           :
           <FaArrowRight style={{cursor:'pointer'}} onClick={()=>setExtendNav(true)}/>)
          :
        <span style={{fontSize:'14px',cursor:'pointer'}}>reviewbyte@gmail.com</span>}
      </div>
      <div className={styles.rightbox} style={{width:LessThan1000 ?LessThan800?"100%": extendNav?"calc(100% - 270px)":"calc(100% - 80px)":"calc(100% - 270px)"}}>
        <span className={styles.navname}>{pathname.substring(1).toUpperCase()}</span>
        <div className={styles.minnav}>
          <button><FaInfo/></button>
          <button><FaMailBulk/></button>
          <button><FaUser/></button>
          {LessThan800 && <button><FaList onClick={()=>setShowNav(true)}/></button>}
        </div>
      </div>
    </div>
  )
}

export default TopNav