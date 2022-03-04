import React, {useState} from 'react';
import axios from 'axios';
import RatingsList from './Ratings-list.jsx';
import RatingsSidebar from './Ratings-sidebar.jsx';

const RatingsAndReviews = (props) => {
  return (
    <div className="RR-header">
      <img className="embellishment" src="http://localhost:3000/assets/sectionEmbellishmentClean.png"></img>
      <h1>Ratings and Reviews</h1>
      <RatingsList currentProduct={props.currentProduct} reviews={props.reviews} setReviews={props.setReviews} reviewsMeta={props.reviewsMeta}/>
      <RatingsSidebar currentProduct={props.currentProduct} reviews={props.reviews} reviewsMeta={props.reviewsMeta}/>
    </div>
  )
};
// showReviewModal={props.showReviewModal}
export default RatingsAndReviews;