import React, { useState } from 'react'
import styles from './setting.module.css'
import { IoBusiness } from "react-icons/io5";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import CompanyBasicInfoForm from '../../components/forms/BasicInfo';
import CompanyContactInfo from '../../components/forms/ContactInfo';
import CompanyDescriptionInfo from '../../components/forms/DesInfo';
import CompanyIntroInfo from '../../components/forms/Intro';

const Setting = () => {
  
  const [showMore,setShowMore]=useState(false)
  const [showMore2,setShowMore2]=useState(false)
  const [showMore3,setShowMore3]=useState(false)
  const [showMore4,setShowMore4]=useState(false)

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <div className={styles.basicinfo} style={{height:showMore?'max-content':'50px'}}>
          <div className={styles.topbox} onClick={()=>setShowMore(c=>!c)}>
            <span className={styles.title}><IoBusiness/>Basic Info</span>
            {showMore?<MdOutlineExpandLess className={styles.openmore}/>:<MdOutlineExpandMore className={styles.openmore}/>}
          </div>
          {showMore &&
          <CompanyBasicInfoForm/>
        }
        </div>
        <div className={styles.basicinfo} style={{height:showMore2?'max-content':'50px'}}>
          <div className={styles.topbox} onClick={()=>setShowMore2(c=>!c)}>
            <span className={styles.title}><IoBusiness/>Company Intro</span>
            {showMore2?<MdOutlineExpandLess className={styles.openmore}/>:<MdOutlineExpandMore className={styles.openmore}/>}
          </div>
          {showMore2 &&
          <CompanyIntroInfo/>
        }
        </div>
        <div className={styles.basicinfo} style={{height:showMore3?'max-content':'50px'}}>
          <div className={styles.topbox} onClick={()=>setShowMore3(c=>!c)}>
            <span className={styles.title}><IoBusiness/>Company description</span>
            {showMore3?<MdOutlineExpandLess className={styles.openmore}/>:<MdOutlineExpandMore className={styles.openmore}/>}
          </div>
          {showMore3 &&
          <CompanyDescriptionInfo/>
        }
        </div>
        <div className={styles.contactinfo} style={{height:showMore4?'max-content':'50px'}}>
          <div className={styles.topbox} onClick={()=>setShowMore4(c=>!c)}>
            <span className={styles.title}><IoBusiness/>Contact Info</span>
            {showMore4?<MdOutlineExpandLess className={styles.openmore}/>:<MdOutlineExpandMore className={styles.openmore}/>}
          </div>
          {showMore4 &&
          <CompanyContactInfo/>
          }
        </div>
      </div>
    </div>
  )
}

export default Setting