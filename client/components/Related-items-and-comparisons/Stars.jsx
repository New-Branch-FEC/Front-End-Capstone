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
    totalOfRatings += props.reviews.results[i].rating
  }

  // take total and divide by number of reviews to get average rating
  let average = totalOfRatings/totalCount;
  // average = 4.8

  // testing
  // console.log("the length is: ", props.reviews.results.length) <-- 5
  // console.log("total count is: ", totalCount) <-- 5 (same as array length!)
  // console.log("total ratings", totalOfRatings) <-- 10
  // console.log("Average! It is: ", average) <-- 2
  // console.log("rounded down rating! It is: ", roundedDownRating) <-- 2

  // rounding down to nearest 25th percentile
  let roundedDownRating = (Math.round(average * 4) / 4) //.toFixed(2);

  // console.log("rounded down star", roundedDownRating)
  // console.log("rounded down rating", roundedDownRating)

  // There should be a total of 20 star rendering options, populated on the screen depending on the average rating calculation (each star rating image must map to the calculated value in the component)

  let firstStar;
  let secondStar;
  let thirdStar;
  let fourthStar;
  let fifthStar;

  if (roundedDownRating === .25) {
    firstStar = <img src="http://localhost:3000/assets/quarterStar.png" />
    secondStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === .5) {
    firstStar = <img src="http://localhost:3000/assets/halfStar.png" />
    secondStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === .75) {
    firstStar = <img src="http://localhost:3000/assets/threeQuarterStar.png" />
    secondStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 1) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 1.25) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/quarterStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 1.5) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/halfStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 1.75) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/threeQuarterStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 2.0) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 2.25) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/quarterStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 2.5) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/halfStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 2.75) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/threeQuarterStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 3) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 3.25) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/quarterStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 3.5) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/halfStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 3.75) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/threeQuarterStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 4) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 4.25) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/quarterStar.png" />
  } else if (roundedDownRating === 4.5) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/halfStar.png" />
  } else if (roundedDownRating === 4.75) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/threeQuarterStar.png" />
  } else if (roundedDownRating === 5) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/fullStar.png" />
  } else {
    console.log("something went wrong with star render!")
  }

  return (
    <div className="star-images">
      {firstStar}
      {secondStar}
      {thirdStar}
      {fourthStar}
      {fifthStar}
    </div>
  )
}

export default Stars;
