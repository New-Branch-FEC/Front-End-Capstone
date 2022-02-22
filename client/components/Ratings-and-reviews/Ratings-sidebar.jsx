import React from 'react';
import Stars from '../Related-items-and-comparisons/Stars.jsx';

const RatingsSidebar = (props) => {

  let ratingsAverage = 0;
  props.reviews.results.forEach(element => (ratingsAverage += element.rating));
  ratingsAverage /= props.reviews.results.length;

  let recommendPercent = 0;
  props.reviews.results.forEach(element => {
    if (element.recommend) {
      recommendPercent += 100;
    }
  });
  recommendPercent /= props.reviews.results.length;

  return (
    <div className="column-L">
      <div className="RR-sidebar">
          <div className="RR-star-rating">
            <p className="RR-average-rating">Average Product Rating: {ratingsAverage}</p>
            {/* TODO: star rating math from Terri, currently logging first review? */}
            <Stars reviews={props.reviews} />
          </div>
          <p className="RR-recommends">{recommendPercent}% of reviewers recommend this product!</p>
          <div className="RR-stars-graph">
            {/* TODO: distribution of {props.reviews.results[ALL_OF_THEM].rating} */}
            <li>5 stars</li>
            <li>4 stars</li>
            <li>3 stars</li>
            <li>2 stars</li>
            <li>1 stars</li>
          </div>
          <div className="RR-characteristics">
            {/* TODO: map for all {props.reviews.results[ALL_OF_THEM].characteristics} */}
            <p className="RR-characteristics-entry">size (mapped)</p>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img>
            <p className="RR-characteristics-entry">comfort (mapped)</p>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img>
          </div>
        </div>
    </div>
  )
};

export default RatingsSidebar;