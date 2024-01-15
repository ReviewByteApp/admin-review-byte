import React, { useState } from 'react'
import styles from './register.module.css'

const Register = () => {
  const categoryData=[
    {id:1,name:"C1"},
    {id:2,name:"C2"},
    {id:3,name:"C3"},
    {id:4,name:"C4"},
  ]

  const subCategoryData=[
    {id:1,cid:1,name:"SC1"},
    {id:2,cid:2,name:"SC2"},
    {id:3,cid:2,name:"SC3"},
    {id:4,cid:3,name:"SC4"},
    {id:5,cid:3,name:"SC5"},
    {id:6,cid:3,name:"SC6"},
    {id:7,cid:4,name:"SC7"},
    {id:8,cid:4,name:"SC8"},
    {id:9,cid:4,name:"SC9"},
    {id:10,cid:4,name:"SC10"},
  ]

  const [selectedCategory,setSelectedcategory]=useState('')
  
  return (
    <div className={styles.cont}>
      <form className={styles.formbox}>
        <h1>Create Account</h1>
        <input type='text' placeholder='Business Name'/>
        <input type='email' placeholder='Business Email'/>
        <input type='tel' placeholder='Business Phone'/>
        <select onChange={(e)=>setSelectedcategory(e.target.value)}>
          <option hidden>Category</option>
          {categoryData.map(l=><option value={l.id} key={l.id}>{l.name}</option>)}
        </select>
        <select>
          <option hidden>SubCategory</option>
          {selectedCategory && subCategoryData.map(l=><option value={l.id} key={l.id}>{l.name}</option>)}
        </select>
        <div className={styles.location}>
        <select>
          <option hidden>Country</option>
          {selectedCategory && subCategoryData.map(l=><option value={l.id} key={l.id}>{l.name}</option>)}
        </select>
        <select>
          <option hidden>City</option>
          {selectedCategory && subCategoryData.map(l=><option value={l.id} key={l.id}>{l.name}</option>)}
        </select>
        </div>
        <button>Create Account</button>
      </form>
      <div className={styles.leftbox}></div>
    </div>
  )
}

export default Register