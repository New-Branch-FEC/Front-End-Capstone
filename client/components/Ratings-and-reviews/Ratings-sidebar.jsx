import React from 'react';
import Stars from '../Related-items-and-comparisons/Stars.jsx';

const RatingsSidebar = (props) => {

  let oneStarQuantity = parseInt(props.reviewsMeta.ratings[1] || 0);
  let twoStarQuantity = parseInt(props.reviewsMeta.ratings[2] || 0);
  let threeStarQuantity = parseInt(props.reviewsMeta.ratings[3] || 0);
  let fourStarQuantity = parseInt(props.reviewsMeta.ratings[4] || 0);
  let fiveStarQuantity = parseInt(props.reviewsMeta.ratings[5] || 0);
  let ratingsTotal = (oneStarQuantity + (twoStarQuantity * 2) + (threeStarQuantity * 3) + (fourStarQuantity * 4) + (fiveStarQuantity * 5));
  let ratingsCount = (oneStarQuantity + twoStarQuantity + threeStarQuantity + fourStarQuantity + fiveStarQuantity);
  let ratingsAverage = Math.round((ratingsTotal / ratingsCount) * 100) / 100;

  let recommendTotal = parseInt(props.reviewsMeta.recommended.true) + parseInt(props.reviewsMeta.recommended.false);
  let recommendValue = Math.round((parseInt(props.reviewsMeta.recommended.true) / recommendTotal) * 100)

  let highestRatingAmount = props.reviewsMeta.ratings[5] || 0;
  let findHighestRatingAmount = (highestRatingAmount) => {

    for (let i = 1; i < 5; i++) {
      if (props.reviewsMeta.ratings[i] > highestRatingAmount) {
        highestRatingAmount = props.reviewsMeta.ratings[i];
      }
    }
  }
  findHighestRatingAmount(highestRatingAmount);

  let oneStarPercentFull = (Math.round((oneStarQuantity / highestRatingAmount) * 100) / 100) * 100;
  let twoStarPercentFull = (Math.round((twoStarQuantity / highestRatingAmount) * 100) / 100) * 100;
  let threeStarPercentFull = (Math.round((threeStarQuantity / highestRatingAmount) * 100) / 100) * 100;
  let fourStarPercentFull = (Math.round((fourStarQuantity / highestRatingAmount) * 100) / 100) * 100;
  let fiveStarPercentFull = (Math.round((fiveStarQuantity / highestRatingAmount) * 100) / 100) * 100;

  let fitValue= (Math.round(props.reviewsMeta.characteristics.Fit?.value * 100) / 100);
  let lengthValue = (Math.round(props.reviewsMeta.characteristics.Length?.value * 100) / 100);
  let comfortValue = (Math.round(props.reviewsMeta.characteristics.Comfort?.value * 100) / 100);
  let qualityValue = (Math.round(props.reviewsMeta.characteristics.Quality?.value * 100) / 100);
  let sizeValue = (Math.round(props.reviewsMeta.characteristics.Size?.value * 100) /100);

  return (
    <div className="column-L">
      <div className="RR-sidebar">
          <div className="RR-star-rating">
            <p className="RR-average-rating">Average Product Rating:</p>
            <div>{ratingsAverage}</div><br></br>
            <Stars reviews={props.reviews} />
          </div>
          <p className="RR-recommends">{recommendValue}% of reviewers recommend this product!</p>
          <figure className="RR-recommends-chart">
            <svg role="img" xmlns="http://www.w3.org/2000/svg">
              <title>Recommended:</title>
              <desc>This is how many reviewers would recommend this product</desc>
              <circle className="circle-background" />
              <circle className="circle-foreground" />
            </svg>
            <figcaption>{recommendValue}% of reviewers recommend this product!</figcaption>
          </figure>
          <div className="RR-stars-graph">
            {/* TODO: turn values into visual representation based on highest number = 100% full bar */}
            <li>5 stars count: {fiveStarQuantity}</li>
            <div className="RR-star-percent">{fiveStarPercentFull}%</div>
            <li>4 stars count: {fourStarQuantity}</li>
            <div className="RR-star-percent">{fourStarPercentFull}%</div>
            <li>3 stars count: {threeStarQuantity}</li>
            <div className="RR-star-percent">{threeStarPercentFull}%</div>
            <li>2 stars count: {twoStarQuantity}</li>
            <div className="RR-star-percent">{twoStarPercentFull}%</div>
            <li>1 stars count: {oneStarQuantity}</li>
            <div className="RR-star-percent">{oneStarPercentFull}%</div>

          </div><br></br>
          <div className="RR-characteristics"> Product Characteristics:
            {/* TODO: conditional rendering for whatever characteristics are present for currentProduct} */}
            { props.reviewsMeta.characteristics.Fit?.value && <p className="RR-characteristics-entry">Fit: {fitValue}, percent full: {Math.round(((fitValue / 5) * 100) * 100) / 100}%</p> }
            { props.reviewsMeta.characteristics.Fit?.value && <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img> }
            { props.reviewsMeta.characteristics.Length?.value && <p className="RR-characteristics-entry">Length: {lengthValue}, percent full: {Math.round(((lengthValue / 5) * 100) * 100) / 100}%</p> }
            { props.reviewsMeta.characteristics.Length?.value && <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img> }
            { props.reviewsMeta.characteristics.Comfort?.value && <p className="RR-characteristics-entry">Comfort: {comfortValue}, percent full: {Math.round(((comfortValue / 5) * 100) * 100) / 100}%</p> }
            { props.reviewsMeta.characteristics.Comfort?.value && <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img> }
            { props.reviewsMeta.characteristics.Quality?.value && <p className="RR-characteristics-entry">Quality: {qualityValue}, percent full: {Math.round(((qualityValue / 5) * 100) * 100) / 100}%</p> }
            { props.reviewsMeta.characteristics.Quality?.value && <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img> }
            { props.reviewsMeta.characteristics.Size?.value && <p className="RR-characteristics-entry">Size: {sizeValue}, percent full: {Math.round(((sizeValue / 5) * 100) * 100) / 100}%</p> }
            { props.reviewsMeta.characteristics.Size?.value && <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img> }
          </div>
        </div>
    </div>
  )
};

export default RatingsSidebar;