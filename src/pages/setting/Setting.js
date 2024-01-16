import React, { useState } from 'react'
import styles from './setting.module.css'
import { IoBusiness, IoFileTrayFullSharp } from "react-icons/io5";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import CompanyBasicInfoForm from '../../components/forms/BasicInfo';
import CompanyContactInfo from '../../components/forms/ContactInfo';
import CompanyDescriptionInfo from '../../components/forms/DesInfo';
import CompanyIntroInfo from '../../components/forms/Intro';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { TbListDetails } from "react-icons/tb";
const Setting = () => {
  
  const [showMore,setShowMore]=useState('')

  const tabs=[
    {id:1,title:'Basic Info',icon:<IoBusiness/>,content:<CompanyBasicInfoForm/>},
    {id:2,title:'Company Intro',icon:<IoFileTrayFullSharp />,content:<CompanyIntroInfo/>},
    {id:3,title:'Company Description',icon:<TbListDetails/>,content:<CompanyDescriptionInfo/>},
    {id:4,title:'Contact Info',icon:<FaMapMarkedAlt/>,content:<CompanyContactInfo/>},
  ]

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        {tabs.map((l)=>(
          <div className={styles.basicinfo} style={{height:showMore===l.id?'max-content':'50px',borderColor:l.id===4?'transparent':'gray'}}>
          <div className={styles.topbox} onClick={showMore===l.id?()=>setShowMore(''):()=>setShowMore(l.id)}>
            <span className={styles.title}>{l.icon}{l.title}</span>
            {showMore===l.id?<MdOutlineExpandLess className={styles.openmore}/>:<MdOutlineExpandMore className={styles.openmore}/>}
          </div>
          {showMore===l.id &&
          l.content
        }
        </div>
        ))}
      </div>
    </div>
  )
}

export default Setting