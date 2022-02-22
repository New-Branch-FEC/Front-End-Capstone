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

  let oneStarCount = 0;
  let twoStarCount = 0;
  let threeStarCount = 0;
  let fourStarCount = 0;
  let fiveStarCount = 0;
  let starCounter = props.reviews.results.forEach(e => {
    if (e.rating === 1) {
      oneStarCount++;
    }
    if (e.rating === 2) {
      twoStarCount++;
    }
    if (e.rating === 3) {
      threeStarCount++;
    }
    if (e.rating === 4) {
      fourStarCount++;
    }
    if (e.rating === 5) {
      fiveStarCount++;
    }
  })

  return (
    <div className="column-L">
      <div className="RR-sidebar">
          <div className="RR-star-rating">
            <p className="RR-average-rating">Average Product Rating:</p>
            {/* TODO: star rating math from Terri, currently logging first review? */}
            <Stars reviews={props.reviews} />
          </div>
          <p className="RR-recommends">{recommendPercent}% of reviewers recommend this product!</p>
          <div className="RR-stars-graph">
            {/* TODO: distribution of {props.reviews.results[ALL_OF_THEM].rating} */}
            <li>5 stars: {fiveStarCount}</li>
            <li>4 stars: {fourStarCount}</li>
            <li>3 stars: {threeStarCount}</li>
            <li>2 stars: {twoStarCount}</li>
            <li>1 stars: {oneStarCount}</li>
          </div>
          <div className="RR-characteristics"> Product Characteristics:
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