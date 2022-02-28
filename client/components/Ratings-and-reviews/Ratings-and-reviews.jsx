import React, {useState} from 'react';
import axios from 'axios';
import RatingsList from './Ratings-list.jsx';
import RatingsSidebar from './Ratings-sidebar.jsx';

const RatingsAndReviews = (props) => {
  return (
    <div className="row RR-header">
      <h1>Ratings and Reviews</h1>
      <RatingsList currentProduct={props.currentProduct} reviews={props.reviews} />
      <RatingsSidebar currentProduct={props.currentProduct} reviews={props.reviews} reviewsMeta={props.reviewsMeta}/>
    </div>
  )
};
// showReviewModal={props.showReviewModal}
export default RatingsAndReviews;