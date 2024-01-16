import React, { useState } from 'react'
import styles from './reviewscard.module.css'
import { FaStar } from 'react-icons/fa'

const ReviewsCard = () => {
    const rates=[
        {id:1,rate:10},{id:2,rate:22},{id:3,rate:36},{id:4,rate:14},{id:5,rate:18},
    ]
    const [checked,setChecked]=useState()

  return (
    <div className={styles.box}>
        <div className={styles.title}><span>Reviews</span><span>22,321 total</span></div>
        {rates.map(l=>(
            <div className={styles.ratebox}>
                <FaStar className={styles.star} style={{color:checked===l.id?"rgb(0,140,255)":"rgba(0,0,0,.3)"}} onClick={()=>setChecked(l.id)}/>
                <span>{l.id}</span>
                <input type='range' value={l.rate} max={100}/>
                <span>{l.rate}%</span>
            </div>
        ))}
        <span className={styles.line}></span>
    </div>
  )
}

export default ReviewsCard