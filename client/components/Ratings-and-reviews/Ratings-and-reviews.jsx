import React from 'react';
import axios from 'axios';
import RatingsList from './Ratings-list.jsx';
import RatingsSidebar from './Ratings-sidebar.jsx';

const RatingsAndReviews = () => {
  // content
  return (
    <div className="row RR-header">
      <RatingsList />
      <RatingsSidebar />
    </div>
  )
};

export default RatingsAndReviews;