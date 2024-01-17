import React from 'react';
import styles from './reviewdetail.module.css';
import { FaCalendarTimes, FaHeart, FaStar } from 'react-icons/fa'

const ReviewDetail = () => {

  const stars=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
  ]
  const star=4
  
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <span>Write your replay</span>
        <textarea maxLength={400} />
        <div className={styles.send}>
          <button>Send Replay</button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.customerinfo}>
          <div className={styles.img} />
          <div className={styles.cinfo}>
            <div>username</div>
            <div>Ethiopia ,addis abeba</div>
            <div>longnameemail234@gmail.com</div>
          </div>
          <div className={styles.rinfo}>
          <div className={styles.rate}>
            {stars.map(l=><span style={{color:'white',background:l.id<=star?"rgb(0,140,255)":'gray',padding:'2px'}}><FaStar size={15}/></span>)}
            </div>
          <div className={styles.date}><FaCalendarTimes/>03 aug 13</div>
          <div className={styles.like}><FaHeart/>25</div>
          </div>
        </div>
        <div className={styles.reviewinfo}>
          <div className={styles.title}>Title for the review</div>
          <div className={styles.desc}>
          descripti des criptides cripti descripti
          descripti des criptides cripti descripti
          descripti des criptides cripti descripti
          descripti des criptides cripti descripti
          descripti des criptides cripti descripti
          descripti des criptides cripti descripti
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
