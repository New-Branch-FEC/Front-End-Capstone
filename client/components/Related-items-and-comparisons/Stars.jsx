import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

const Stars = (props) => {
  //  Edge case: if there are no reviews, HIDE the star rating section on each card.
  if (props.reviews.results.length === 0) {
    return (
      <>
      <div></div>
      </>
    )
  }
  // star needs the product id to pull all reviews for that item (the get request is currently for all reviews)
  // aggragate star reviews at props.reviews.results[0].rating

  // For each req.body.results.rating, add value to total, and count each rating
  let totalCount = 0;
  let totalOfRatings = 0;
  for (let i = 0; i < props.reviews.results.length; i++) {
    totalCount++;
    totalOfRatings += props.reviews.results[i]
  }

  // take total and divide by number of reviews to get average rating
  let average = totalOfRatings/totalCount;

  // rounding down to nearest 25th percentile
  let roundedDownRating = (Math.round(average * 4) / 4).toFixed(2);


  // There should be a total of 20 star rendering options, populated on the screen depending on the average rating calculation (each star rating image must map to the calculated value in the component)

  // How to render 1/4, 1/2, 3/4 parts of star? does fontawesome have this, or must these be made and imported as assets?

  // console.log(props.reviews)
  return (
    <>
    <div>{props.reviews.results[0].rating}</div>
    <div>☆☆☆☆☆</div>
    </>
  )
}

export default Stars;