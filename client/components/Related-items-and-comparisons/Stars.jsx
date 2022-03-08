import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

const Stars = (props) => {
  if (props.reviews.results.length === 0) {
    return (
      <>
        <div></div>
      </>
    )
  }

  let totalCount = 0;
  let totalOfRatings = 0;
  for (let i = 0; i < props.reviews.results.length; i++) {
    totalCount++;
    totalOfRatings += props.reviews.results[i].rating
  }

  // take total and divide by number of reviews to get average rating
  let average = totalOfRatings / totalCount;

  // rounding down to nearest 25th percentile
  let roundedDownRating = (Math.round(average * 4) / 4)

  let firstStar;
  let secondStar;
  let thirdStar;
  let fourthStar;
  let fifthStar;

  if (roundedDownRating === .25) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/quarterStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === .5) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/halfStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === .75) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/threeQuarterStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 1) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 1.25) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/quarterStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 1.5) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/halfStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 1.75) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/threeQuarterStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 2.0) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 2.25) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/quarterStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 2.5) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/halfStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 2.75) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/threeQuarterStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 3) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 3.25) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/quarterStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 3.5) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/halfStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 3.75) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/threeQuarterStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 4) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/emptyStar.png" />
  } else if (roundedDownRating === 4.25) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/quarterStar.png" />
  } else if (roundedDownRating === 4.5) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/halfStar.png" />
  } else if (roundedDownRating === 4.75) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/threeQuarterStar.png" />
  } else if (roundedDownRating === 5) {
    firstStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img alt="star icon" src="http://localhost:3000/assets/fullStar.png" />
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
