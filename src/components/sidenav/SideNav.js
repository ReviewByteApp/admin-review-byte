import React, { useContext } from 'react'
import styles from './sidenav.module.css'
import { NavLink } from 'react-router-dom'
import { FaBuilding, FaGrimace, FaHome, FaMailBulk, FaTimes, FaUpload } from 'react-icons/fa'
import { GiSettingsKnobs } from "react-icons/gi";
import { SideNavContext } from '../../context/SideNavShow';

const SideNav = () => {
  // style={{left:showNav?`0`:`-100%`,width:'100%'}}
  const { extendNav,LessThan1000,LessThan800,setExtendNav ,showNav,setShowNav} = useContext(SideNavContext);

  const Links=[
    {id:1,to:'/',name:'Dashboard',icon:<FaBuilding size={20}/>},
    {id:2,to:'/home',name:'Home',icon:<FaHome size={20}/>},
    {id:3,to:'/home',name:'Review',icon:<FaMailBulk size={20}/>},
    {id:4,to:'/',name:'Promotion',icon:<FaUpload size={20}/>},
    {id:5,to:'/home',name:'Analytics',icon:<FaGrimace size={20}/>},
    {id:6,to:'/setting',name:'Settings',icon:<GiSettingsKnobs size={20}/>},
  ]

  return (
    <div className={styles.box} style={{width:LessThan1000 ? (extendNav?'100%':''):'',height:LessThan800?"100vh":"calc(100vh - 60px)",top:LessThan800?"0":"60px"}}>
      <div className={styles.cont} style={{width:LessThan1000 ?LessThan800?(showNav?"100vw":"0"):(extendNav?'250px':'60px'):'250px',height:LessThan800?"100vh":"calc(100% - 20px)"}}>
      {LessThan800 && <FaTimes className={styles.closemenu} onClick={()=>setShowNav(false)}/>}
      {Links.map(l=>(
        <NavLink to={l.to} key={l.id} className={styles.link} onClick={()=>{setShowNav(false);setExtendNav(false)}}>
          <span className={styles.icon}>{l.icon}</span>
          <span className={styles.name} style={{display:LessThan1000 ?LessThan800?(showNav?"flex":"none"):extendNav?'flex':'none':'flex'}}>{l.name}</span>
        </NavLink>
      ))}
      </div>
      <div className={styles.emptybox} style={{display:LessThan800?"none":'flex'}} onClick={()=>setExtendNav(false)}></div>
    </div>
  )
}

export default SideNav