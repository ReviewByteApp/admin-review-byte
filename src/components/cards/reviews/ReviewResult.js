import React, { useState } from 'react'
import styles from './reviewresult.module.css'
import CardReview from './CardReview'

const RviewResult = () => {
  const pages=[
    {page:1},{page:2},{page:3},{page:4},{page:5},{page:6},
  ]
  const review=[
    {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},
  ]

  const [pageNum,setPageNum]=useState()

  return (
    <div className={styles.cont}>
        <div className={styles.title}>
          <span>1-10 of 134 results</span>
          <div className={styles.options}>
          <select><option>Most Relevant</option><option>Recent</option></select>
          <select><option>5-star</option><option>4-star</option><option>3-star</option><option>2-star</option><option>1-star</option></select>
          </div>
        </div>
        <div className={styles.pagination}>
          {pages.map(l=><button onClick={()=>setPageNum(l.page)} style={{background:l.page===pageNum?"var(--brand-color)":"white",color:l.page===pageNum?'white':"var(--brand-color)"}}>{l.page}</button>)}
        </div>
        <div className={styles.list}>
          <div className={styles.listtitle}>
            <span>UserEmail</span>
            <span>Date</span>
            <span>Location</span>
            <span>Rate</span>
            <span>Detail</span>
          </div>
          {review.map(l=><CardReview/>)}
        </div>
    </div>
  )
}

export default RviewResult