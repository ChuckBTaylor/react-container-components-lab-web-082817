import React from 'react';



function MovieReviews(props) {
  const reviews = props.reviews.map((review, idx) => (
    <li key={idx} className='review'>Name: {review.display_title}<br/>Summary: {review.summary_short}</li>)
  )
  return (
    <ul className="review-list">
    {reviews}
    </ul>
  )
}

export default MovieReviews;

MovieReviews.defaultProps = {
  reviews: []
}
