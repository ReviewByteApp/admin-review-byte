import React, { useContext, useState } from 'react'
import styles from './topnav.module.css'
import {useLocation} from 'react-router-dom'
import { FaArrowRight, FaTimes, FaRegUser  } from 'react-icons/fa'
import { SideNavContext } from '../../context/SideNavShow'
import { CiMenuFries } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { IoMdHelp } from "react-icons/io";

const TopNav = () => {
  const {pathname}=useLocation()
  const { extendNav,setExtendNav,setShowNav,LessThan1000,LessThan800} = useContext(SideNavContext);
  const [openMenu,setOpenMenu]=useState()

  const Menus=[
    {id:1,icon:<IoMdHelp/>,content:<FaArrowRight/>},
    {id:2,icon:<FiMail/>,content:<FaArrowRight/>},
    {id:3,icon:<FaRegUser />,content:<FaArrowRight/>},
  ]

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
          {
            Menus.map(l=>(
              <div className={styles.buttoncont} key={l.id}>
                <button className={styles.infobtn} 
                onClick={()=>setOpenMenu(l.id)}>{l.icon}
                </button>
                <div className={styles.infobox} style={{display:openMenu===l.id?"flex":'none'}}>
                  <div className={styles.mintitle} onClick={()=>setOpenMenu('')}><FaTimes/></div>
                  <div className={styles.infoboxcont} >
                    {l.content}
                  </div>
                </div>
              </div>
            ))
          }
          {LessThan800 && <button className={styles.infobtn}><CiMenuFries onClick={()=>setShowNav(true)}/></button>}
        </div>
      </div>
    </div>
  )
}

export default TopNav