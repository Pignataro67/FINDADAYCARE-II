import React from 'react';

const Reviews = (props) => {
  return props.reviews.map(review => {
    return (
      <div  key={review.id}>
        <p className="daycare__review">{review.text}</p> 
        <a className="daycare__link" target="blank" href={review.url}>See full review</a> <br></br>
      </div>
    )
  })
}

export default Reviews;