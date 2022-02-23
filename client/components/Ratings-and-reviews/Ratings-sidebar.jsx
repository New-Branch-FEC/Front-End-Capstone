import React from 'react';
import Stars from '../Related-items-and-comparisons/Stars.jsx';

const RatingsSidebar = (props) => {

  let ratingsTotal = (parseInt(props.reviewsMeta.ratings[1]) + (parseInt(props.reviewsMeta.ratings[2]) * 2) + (parseInt(props.reviewsMeta.ratings[3]) * 3) + (parseInt(props.reviewsMeta.ratings[4]) * 4) + (parseInt(props.reviewsMeta.ratings[5]) * 5));
  let ratingsCount = (parseInt(props.reviewsMeta.ratings[1]) + parseInt(props.reviewsMeta.ratings[2]) + parseInt(props.reviewsMeta.ratings[3]) + parseInt(props.reviewsMeta.ratings[4]) + parseInt(props.reviewsMeta.ratings[5]));
  let ratingsAverage = Math.round((ratingsTotal / ratingsCount) * 100) / 100;

  let recommendTotal = parseInt(props.reviewsMeta.recommended.true) + parseInt(props.reviewsMeta.recommended.false);
  let recommendValue = Math.round((parseInt(props.reviewsMeta.recommended.true) / recommendTotal) * 100)

  let highestRatingAmount = props.reviewsMeta.ratings[1];
  for (let i = 2; i <= 5; i++) {
    if (props.reviewsMeta.ratings[i] > highestRatingAmount) {
      highestRatingAmount = props.reviewsMeta.ratings[i];
    }
  }

  let oneStarPercentFull = (Math.round((props.reviewsMeta.ratings[1] / highestRatingAmount) * 100) / 100) * 100;
  let twoStarPercentFull = (Math.round((props.reviewsMeta.ratings[2] / highestRatingAmount) * 100) / 100) * 100;
  let threeStarPercentFull = (Math.round((props.reviewsMeta.ratings[3] / highestRatingAmount) * 100) / 100) * 100;
  let fourStarPercentFull = (Math.round((props.reviewsMeta.ratings[4] / highestRatingAmount) * 100) / 100) * 100;
  let fiveStarPercentFull = (Math.round((props.reviewsMeta.ratings[5] / highestRatingAmount) * 100) / 100) * 100;

  let fitValue = Math.round(props.reviewsMeta.characteristics.Fit.value * 100) / 100;
  let lengthValue = Math.round(props.reviewsMeta.characteristics.Length.value * 100) / 100;
  let comfortValue = Math.round(props.reviewsMeta.characteristics.Comfort.value * 100) / 100;
  let qualityValue = Math.round(props.reviewsMeta.characteristics.Quality.value * 100) / 100;




  return (
    <div className="column-L">
      <div className="RR-sidebar">
          <div className="RR-star-rating">
            <p className="RR-average-rating">Average Product Rating:</p>
            <div>{ratingsAverage}</div>
            {/* TODO: confirm Stars is using reveiwsMeta data */}
            <Stars reviews={props.reviews} />
          </div>
          <p className="RR-recommends">{recommendValue}% of reviewers recommend this product!</p>
          <div className="RR-stars-graph">
            {/* TODO: turn values into visual representation based on highest number = 100% full bar */}
            <li>5 stars count: {props.reviewsMeta.ratings[5]}, percent full: {fiveStarPercentFull}%</li>
            <li>4 stars count: {props.reviewsMeta.ratings[4]}, percent full: {fourStarPercentFull}%</li>
            <li>3 stars count: {props.reviewsMeta.ratings[3]}, percent full: {threeStarPercentFull}%</li>
            <li>2 stars count: {props.reviewsMeta.ratings[2]}, percent full: {twoStarPercentFull}%</li>
            <li>1 stars count: {props.reviewsMeta.ratings[1]}, percent full: {oneStarPercentFull}%</li>
          </div>
          <div className="RR-characteristics"> Product Characteristics:
            {/* TODO: conditional rendering for whatever characteristics are present for currentProduct} */}
            <p className="RR-characteristics-entry">Fit: {fitValue}, percent full: {Math.round(((fitValue / 5) * 100) * 100) / 100}%</p>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img>
            <p className="RR-characteristics-entry">Length: {lengthValue}, percent full: {Math.round(((lengthValue / 5) * 100) * 100) / 100}%</p>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img>
            <p className="RR-characteristics-entry">Comfort: {comfortValue}, percent full: {Math.round(((comfortValue / 5) * 100) * 100) / 100}%</p>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img>
            <p className="RR-characteristics-entry">Quality: {qualityValue}, percent full: {Math.round(((qualityValue / 5) * 100) * 100) / 100}%</p>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img>
          </div>
        </div>
    </div>
  )
};

export default RatingsSidebar;