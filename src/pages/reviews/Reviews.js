import React from 'react'
import styles from './review.module.css'
import ReviewResult from '../../components/cards/reviews/ReviewResult'
const Reviews = () => {
  return (
    <div className={styles.cont}>
      <ReviewResult/>
    </div>
  )
}

export default Reviews