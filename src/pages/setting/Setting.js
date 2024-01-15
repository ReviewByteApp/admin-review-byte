import React, { useState } from 'react'
import styles from './setting.module.css'
import { IoBusiness } from "react-icons/io5";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { FaPlus} from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Setting = () => {
  
  const [showMore,setShowMore]=useState(false)
  const [showMore2,setShowMore2]=useState(false)
  const [showMore3,setShowMore3]=useState(false)
  const [showMore4,setShowMore4]=useState(false)

  const [serviceValue,setServiceValue]=useState('')
  const [services,setServices]=useState(["free","ww"])

  const addService = (e) => {
    // Create a new array with the existing values and the new value
    const updatedServices = [...services, e];
    setServices(updatedServices);
    setServiceValue('')
  };

  const removeService = (e) => {
    const updatedServices = services.filter((s) => s !== e);
    setServices(updatedServices);
  };

  const [logoPreview,setLogoPreview]=useState(null)
  const [vidPreview,setVidPreview]=useState(null)
  const [picPreview,setPicPreview]=useState([])

  const handleVidChange=(e)=>{
    const file=e.target.files[0];
    setVidPreview(URL.createObjectURL(file))
  }

  const handleLogoChange=(e)=>{
    const file=e.target.files[0];
    setLogoPreview(URL.createObjectURL(file))
  }

  const handlePicChange=(e)=>{
    const files = e.target.files;
    const pics = [];
    for (let x = 0; x < (files.length >5 ?5:files.length); x++) {
      pics.push(URL.createObjectURL(files[x]));
    }
    setPicPreview(pics);
  }

  return (
    <div className={styles.cont}>
      <div className={styles.box}>
        <div className={styles.basicinfo} style={{height:showMore?'max-content':'50px'}}>
          <div className={styles.topbox} onClick={()=>setShowMore(c=>!c)}>
            <span className={styles.title}><IoBusiness/>Basic Info</span>
            {showMore?<MdOutlineExpandLess className={styles.openmore}/>:<MdOutlineExpandMore className={styles.openmore}/>}
          </div>
          {showMore &&
          <>
          <div className={styles.infoform}>
          <span className={styles.formtitle}>Add your logo, company name, and domain to your Review Byte profile.</span>
          <div className={styles.inputbox}>
            <span>Company Name</span>
            <input type='text'/>
          </div>
          <div className={styles.inputbox}>
            <span>Company Website</span>
            <input type='url'/>
          </div>
          <div className={styles.inputbox}>
            <span>Company Email</span>
            <input type='email'/>
          </div>
          <div className={styles.inputbox}>
            <span>Company Password</span>
            <input type='password'/>
          </div>
          <div className={styles.inputbox}>
            <span>Company Logo</span>
            <input type='file' onChange={handleLogoChange}/>
            <img src={logoPreview?logoPreview:'h'} alt='logo' className={styles.logopreview}/>
          </div>
        </div>
        <div className={styles.previewbasic}>
          Preview
        </div>
        <div className={styles.savebasic}>
          <button>Save and Publish</button>
          <button>Cancel</button>
        </div>
        </>
        }
        </div>
        <div className={styles.basicinfo} style={{height:showMore2?'max-content':'50px'}}>
          <div className={styles.topbox} onClick={()=>setShowMore2(c=>!c)}>
            <span className={styles.title}><IoBusiness/>Company Intro</span>
            {showMore2?<MdOutlineExpandLess className={styles.openmore}/>:<MdOutlineExpandMore className={styles.openmore}/>}
          </div>
          {showMore2 &&
          <>
          <div className={styles.infoform}>
          <span className={styles.formtitle}>Add photo and video that describe your company.</span>
          <div className={styles.inputbox}>
            <span>Company Photo</span>
            <input type='file' accept='image/*' multiple onChange={handlePicChange}/>
              <Swiper navigation={true} modules={[Navigation]} className={styles.myswiper}>
                {picPreview.map(l=><SwiperSlide><img src={l} alt='logo' className={styles.photopreview}/></SwiperSlide>)}
              </Swiper>
          </div>
          <div className={styles.inputbox}>
            <span>Company Video</span>
            <input type='file' accept='video/*' onChange={handleVidChange}/>
            {vidPreview && <video src={vidPreview} controls/>}
          </div>
        </div>
        <div className={styles.savebasic}>
          <button>Save and Publish</button>
          <button>Cancel</button>
        </div>
        </>
        }
        </div>
        <div className={styles.basicinfo} style={{height:showMore3?'max-content':'50px'}}>
          <div className={styles.topbox} onClick={()=>setShowMore3(c=>!c)}>
            <span className={styles.title}><IoBusiness/>Company description</span>
            {showMore3?<MdOutlineExpandLess className={styles.openmore}/>:<MdOutlineExpandMore className={styles.openmore}/>}
          </div>
          {showMore3 &&
          <>
          <div className={styles.infoform}>
          <span className={styles.formtitle}>We recommend writing at least 200 words about your company</span>
          <div className={styles.inputbox}>
            <span>Category</span>
            <select>
              <option>c1</option>
              <option>c3</option>
              <option>c3</option>
            </select>
          </div>
          <div className={styles.inputbox}>
            <span>SubCategory</span>
            <select>
              <option>sc1</option>
              <option>sc3</option>
              <option>sc3</option>
            </select>
          </div>
          <div className={styles.inputbox}>
            <span>Description</span>
            <textarea placeholder='Tell your Customer what makes you unique'/>
          </div>
          <div className={styles.inputbox}>
            <span>Services</span>
            <div className={styles.listinput}>
              <input placeholder='Free wifi' value={serviceValue} onChange={(e)=>setServiceValue(e.target.value)} type='text'/>
              <span className={styles.addbtn} style={{background:serviceValue?'var(--brand-color)':"gray"}} onClick={()=>addService(serviceValue)}><FaPlus/> Add</span>
            </div>
            <div className={styles.servicelist}>
              {services.map(l=><span onClick={()=>removeService(l)}>{l}</span>)}
            </div>
          </div>
        </div>
        <div className={styles.savebasic}>
          <button>Save and Publish</button>
          <button onClick={()=>setServices([])}>Cancel</button>
        </div>
        </>
        }
        </div>
        <div className={styles.contactinfo} style={{height:showMore4?'max-content':'50px'}}>
          <div className={styles.topbox} onClick={()=>setShowMore4(c=>!c)}>
            <span className={styles.title}><IoBusiness/>Contact Info</span>
            {showMore4?<MdOutlineExpandLess className={styles.openmore}/>:<MdOutlineExpandMore className={styles.openmore}/>}
          </div>
          {showMore4 &&
          <>
          <div className={styles.infoform}>
          <span className={styles.formtitle}>Tell your customers how to get in touch.</span>
          <div className={styles.inputbox}>
            <span>Phone Number</span>
            <input type='tel'/>
          </div>
          <div className={styles.inputbox}>
            <span>Country</span>
            <input type='text'/>
          </div>
          <div className={styles.inputbox}>
            <span>City</span>
            <input type='text'/>
          </div>
          <div className={styles.inputbox}>
            <span>Map</span>
            <input type='text'/>
          </div>
        </div>
        <div className={styles.savebasic}>
          <button>Save and Publish</button>
          <button>Cancel</button>
        </div>
        </>
        }
        </div>
      </div>
    </div>
  )
}

export default Setting