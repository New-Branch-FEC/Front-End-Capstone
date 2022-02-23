import React from 'react';
import RatingsListEntry from './Ratings-list-entry.jsx';

const RatingsList = (props) => {

  let clickMore = () => {
    console.log('show 2 more reviews, if none left remove button');
  }

  let clickAdd = () => {
    console.log('open a modal to add a new review to DOM');
  }
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
          <RatingsListEntry reviews={props.reviews} key={i} currentReview={props.reviews.results[i]} />
        ))}
      </div>
      <div className="RR-more-and-add">
        <button id="More-reviews RR-button" onClick={clickMore}>More Reviews</button>
        <button id="Add-a-review RR-button" onClick={clickAdd}>Add a Review +</button>
      </div>
    </div>
  )
};

export default RatingsList;