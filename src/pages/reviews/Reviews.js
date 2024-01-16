import React from 'react'
import styles from './review.module.css'
import ReviewsCard from '../../components/cards/reviews/ReviewsCard'
import RviewResult from '../../components/cards/reviews/RviewResult'
const Reviews = () => {
  return (
    <div className={styles.cont}>
      <ReviewsCard/>
      <RviewResult/>
    </div>
  )
}

export default Reviews