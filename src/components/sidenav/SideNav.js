import React, { useContext } from 'react'
import styles from './sidenav.module.css'
import { NavLink ,useLocation } from 'react-router-dom'
import { FaChartPie, FaTimes } from 'react-icons/fa'
import { MdReviews, MdSettingsInputComponent } from "react-icons/md";
import { SideNavContext } from '../../context/SideNavShow';
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BiSolidDashboard } from "react-icons/bi";
import { TbWorldUpload } from "react-icons/tb";

const SideNav = () => {
  // style={{left:showNav?`0`:`-100%`,width:'100%'}}
  const { extendNav,LessThan1000,LessThan800,setExtendNav ,showNav,setShowNav} = useContext(SideNavContext);
  const {pathname}=useLocation()
  const Links=[
    {id:1,to:'/dashboard',name:'Dashboard',icon:<BiSolidDashboard size={20}/>},
    {id:2,to:'/home',name:'Home',icon:<SiHomeassistantcommunitystore size={20}/>},
    {id:3,to:'/reviews',name:'Review',icon:<MdReviews size={20}/>},
    {id:4,to:'/post',name:'Post',icon:<TbWorldUpload size={20}/>},
    {id:5,to:'/analysis',name:'Analytics',icon:<FaChartPie size={20}/>},
    {id:6,to:'/setting',name:'Settings',icon:<MdSettingsInputComponent size={20}/>},
  ]

  return (
    <div className={styles.box} style={{width:LessThan1000 ? (extendNav?'100%':''):'',height:LessThan800?"100vh":"calc(100vh - 60px)",top:LessThan800?"0":"60px"}}>
      <div className={styles.cont} style={{width:LessThan1000 ?LessThan800?(showNav?"100vw":"0"):(extendNav?'250px':'60px'):'250px',height:LessThan800?"100vh":"calc(100% - 20px)"}}>
      {LessThan800 && <FaTimes className={styles.closemenu} onClick={()=>setShowNav(false)}/>}
      {Links.map(l=>(
        <NavLink to={l.to} key={l.id} className={pathname===l.to?styles.activelink:styles.link} onClick={()=>{setShowNav(false);setExtendNav(false)}}>
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