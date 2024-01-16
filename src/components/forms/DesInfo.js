import React, { useEffect, useState } from 'react'
import styles from './desinfo.module.css'
import { FaPlus } from 'react-icons/fa'

const CompanyDescriptionInfo = () => {
    
  const [serviceValue,setServiceValue]=useState('')
  const [services,setServices]=useState([])
  const [description,setDescription]=useState('')
  const [category,setCategory]=useState('')
  const [subCategory,setSubCategory]=useState('')

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

  function handleCategoryChange(e){
    setCategory(e.target.value)
  }
  function handleSubCategoryChange(e){
    setSubCategory(e.target.value)
  }

  const cancelFun=()=>{
    getDesInfo()
  }

  function saveNewDesInfo(e){
    e.preventDefault()
    console.log(services,description,category,subCategory)
  }

  function getDesInfo(){
    setDescription('description')
    setCategory('c4')
    setSubCategory('sc4')
    const arry=['1','2','3']
    const updatedServices = [];
    arry.forEach((e) => {
        updatedServices.push(e);
      });
    setServices(updatedServices);
  }

  useEffect(()=>{
    getDesInfo()
  },[])

  return (
    <div className={styles.cont}>
        <form className={styles.box} onSubmit={saveNewDesInfo}>
            <div className={styles.title}>We recommend writing at least 200 words about your company.</div>
                <div className={styles.inputbox}>
                    <span className={styles.inputtitle}>Category</span>
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="c1">c1</option>
                        <option value="c2">c2</option>
                        <option value="c3">c3</option>
                        <option value="c4">c4</option>
                    </select>
                </div>
                <div className={styles.inputbox}>
                    <span className={styles.inputtitle}>SubCategory</span>
                    <select value={subCategory} onChange={handleSubCategoryChange}>
                        <option value="sc1">sc1</option>
                        <option value="sc2">sc2</option>
                        <option value="sc3">sc3</option>
                        <option value="sc4">sc4</option>
                    </select>
                </div>
                <div className={styles.inputbox}>
                    <span className={styles.inputtitle}>Description</span>
                    <textarea placeholder='what make your business unique' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className={styles.inputbox}>
                    <span className={styles.inputtitle}>Services</span>
                    <input placeholder='Free wifi' value={serviceValue} onChange={(e)=>setServiceValue(e.target.value)} type='text'/>
                    <button className={styles.addbtn} disabled={!serviceValue} style={{background:serviceValue?'var(--brand-color)':"gray"}} onClick={()=>addService(serviceValue)}><FaPlus/> Add</button>
                    <div className={styles.lists}>
                    {services.map((l,id)=><span key={id} onClick={()=>removeService(l)}>{l}</span>)}
                    </div>
                </div>
            <div className={styles.savebox}>
                <button className={styles.savebtn} type='submit'>Save and Publish</button>
                <button className={styles.savebtn} onClick={cancelFun}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default CompanyDescriptionInfo