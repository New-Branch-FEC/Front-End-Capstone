import React from 'react';
import RatingsListEntry from './Ratings-list-entry.jsx';

const RatingsList = (props) => {
  return (
    <div className="column-R RR-ratings-list">Ratings List Goes Here
      <div>Number of Total Reviews Goes Here (There are "props.reviews.length" reviews)</div>
      <form>Sorted by "Relevance" (form: relevance, newest, helpful)</form>
      <RatingsListEntry />
      <RatingsListEntry />
      <div className="RR-more-and-add">
        <button id="More-reviews RR-button">More Reviews</button>
        <button id="Add-a-review RR-button">Add a Review +</button>
      </div>
    </div>
  )
};

export default RatingsList;