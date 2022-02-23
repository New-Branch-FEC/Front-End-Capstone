import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

const IndivStars = (props) => {

  let firstStar;
  let secondStar;
  let thirdStar;
  let fourthStar;
  let fifthStar;

  if (props.currentRating.rating === 1) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (props.currentRating.rating === 2) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (props.currentRating.rating === 3) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (props.currentRating.rating === 4) {
    firstStar = <img src="http://localhost:3000/assets/fullStar.png" />
    secondStar = <img src="http://localhost:3000/assets/fullStar.png" />
    thirdStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fourthStar = <img src="http://localhost:3000/assets/fullStar.png" />
    fifthStar = <img src="http://localhost:3000/assets/emptyStar.png" />
  } else if (props.currentRating.rating === 5) {
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

export default IndivStars;