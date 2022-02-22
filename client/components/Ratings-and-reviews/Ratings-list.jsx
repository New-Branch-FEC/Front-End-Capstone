import React from 'react';
import RatingsListEntry from './Ratings-list-entry.jsx';

const RatingsList = (props) => {
  return (
    <div className="column-R RR-ratings-list">Ratings List Goes Here
      <h2>There Are {props.reviews.results.length} Reviews For This Product</h2>
      <form>
        <label>Sort by </label>
        <select>
          <option value="relevance">Relevance</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </form>
      <div>
        {props.reviews.results.map((reviews, i) => (
          <RatingsListEntry reviews={props.reviews} currentReview={props.reviews.results[i]} />
        ))}
      </div>
      <div className="RR-more-and-add">
        <button id="More-reviews RR-button">More Reviews</button>
        <button id="Add-a-review RR-button">Add a Review +</button>
      </div>
    </div>
  )
};

export default RatingsList;