import React,{ useEffect, useState} from 'react';
import styles from './intro.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';

const CompanyIntroInfo = () => {
  const [vidPreview, setVidPreview] = useState (null);
  const [picPreview, setPicPreview] = useState (null);

  const handleVidChange = e => {
    const file = e.target.files[0];
    setVidPreview (URL.createObjectURL (file));
  };

  const handlePicChange = e => {
    const files = e.target.files;
    const pics = [];
    for (let x = 0; x < (files.length); x++) {
      pics.push (URL.createObjectURL (files[x]));
    }
    setPicPreview (pics);
  };

  const cancelFun=()=>{
    getIntroData()
  }

  function deletePic(e){
    console.log(e)
    let newImgs = picPreview.filter((item)=>{return item !== e})
    setPicPreview(newImgs)
  }

  function saveIntroData(e){
    e.preventDefault()
    console.log(picPreview)
    console.log(vidPreview)
  }

  function getIntroData(){
    setPicPreview(['/logo192.png','/logo512.png','kjhg'])
    setVidPreview('/logo192.png')
  }

  useEffect(()=>{
    getIntroData()
  },[])

  return (
    <div className={styles.cont}>
      <form className={styles.box} onSubmit={saveIntroData}>
        <div className={styles.title}>
          Add photo and video that describe your company.
        </div>
        <div className={styles.inputbox}>
          <span>Company Video</span>
          <input type="file" accept="video/*" onChange={handleVidChange} />
          {vidPreview && <video src={vidPreview} controls />}
        </div>
        <div className={styles.inputbox}>
          <span>Company Photo</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePicChange}
          />
          {picPreview &&
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className={styles.myswiper}
            >
              {picPreview.map (l => (
                <SwiperSlide className={styles.slide}>
                  <img src={l} alt="logo" className={styles.photopreview} />
                  <span className={styles.deleteimg} onClick={()=>deletePic(l)}>delete</span>
                </SwiperSlide>
              ))}
            </Swiper>}
        </div>
        <div className={styles.savebox}>
          <button className={styles.savebtn} type="submit">
            Save and Publish
          </button>
          <button className={styles.savebtn} onClick={cancelFun}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CompanyIntroInfo;
