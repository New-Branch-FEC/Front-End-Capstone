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

  let fitValue = (Math.round(props.reviewsMeta.characteristics.Fit?.value * 100) / 100);
  let lengthValue = (Math.round(props.reviewsMeta.characteristics.Length?.value * 100) / 100);
  let comfortValue = (Math.round(props.reviewsMeta.characteristics.Comfort?.value * 100) / 100);
  let qualityValue = (Math.round(props.reviewsMeta.characteristics.Quality?.value * 100) / 100);
  let sizeValue = (Math.round(props.reviewsMeta.characteristics.Size?.value * 100) / 100);

  return (
    <div className="column-L">
      <div className="RR-sidebar">
        <div className="RR-star-rating">
          <h2 className="RR-average-rating">Average Product Rating:</h2>
          <div>{ratingsAverage}</div><br></br>
          <Stars reviews={props.reviews} />
        </div>
        <br></br>
        <div className="RR-stars">
          <h2>Review Breakdown:</h2>
          <section className="bar-graph bar-graph-horizontal bar-graph-one">
            <div className="bar-one">5 Star Reviews
              <br></br>
              <span className="RR-star-count"></span>
              <div className="bar" data-percentage={fiveStarQuantity}></div>
            </div>
            <div className="bar-two">4 Star Reviews
              <br></br>
              <span className="RR-star-count"></span>
              <div className="bar" data-percentage={fourStarQuantity}></div>
            </div>
            <div className="bar-three">3 Star Reviews
              <br></br>
              <span className="RR-star-count"></span>
              <div className="bar" data-percentage={threeStarQuantity}></div>
            </div>
            <div className="bar-four">2 Star Reviews
              <br></br>
              <span className="RR-star-count"></span>
              <div className="bar" data-percentage={twoStarQuantity}></div>
            </div>
            <div className="bar-five">1 Star Reviews
              <br></br>
              <span className="RR-star-count"></span>
              <div className="bar" data-percentage={oneStarQuantity}></div>
            </div>
          </section>
        </div>
        <br></br>
        <br></br>
        <section className="bar-graph bar-graph-horizontal bar-graph-one">
          <div className="bar-six">
            <h3>% Recommended</h3>
            <span className="RR-star-count"></span>
            <div className="bar" data-percentage={recommendValue}></div>
          </div>
        </section>
        <br></br>
        {/* <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill"></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
            </div>
            <div className="inside-circle">
              {recommendValue}
            </div>
          </div>
        </div> */}
        <br></br>
        <div className="RR-characteristics">
          <h2>Product Characteristics:</h2>
          {/* percent full: {Math.round(((fitValue / 5) * 100) * 100) / 100}% */}
          {props.reviewsMeta.characteristics.Fit?.value &&
            <section className="bar-graph bar-graph-horizontal bar-graph-one">
              <div className="bar-fit">
                <h3>Fit: {fitValue} / 5</h3>
                <span className="RR-star-count"></span>
                <div className="bar" data-percentage={fitValue}></div>
              </div>
            </section>}
          {/* percent full: {Math.round(((lengthValue / 5) * 100) * 100) / 100}%</p> */}
          {props.reviewsMeta.characteristics.Length?.value &&
            <section className="bar-graph bar-graph-horizontal bar-graph-one">
              <div className="bar-length">
                <h3>Length: {lengthValue} / 5</h3>
                <span className="RR-star-count"></span>
                <div className="bar" data-percentage={lengthValue}></div>
              </div>
            </section>}
          {/* percent full: {Math.round(((comfortValue / 5) * 100) * 100) / 100}%</p> */}
          {props.reviewsMeta.characteristics.Comfort?.value &&
            <section className="bar-graph bar-graph-horizontal bar-graph-one">
              <div className="bar-comfort">
                <h3>Comfort: {comfortValue} / 5</h3>
                <span className="RR-star-count"></span>
                <div className="bar" data-percentage={comfortValue}></div>
              </div>
            </section>}
          {/* percent full: {Math.round(((qualityValue / 5) * 100) * 100) / 100}%</p> */}
          {props.reviewsMeta.characteristics.Quality?.value &&
            <section className="bar-graph bar-graph-horizontal bar-graph-one">
              <div className="bar-quality">
                <h3>Quality: {qualityValue} / 5</h3>
                <span className="RR-star-count"></span>
                <div className="bar" data-percentage={qualityValue}></div>
              </div>
            </section>}
          {/* {props.reviewsMeta.characteristics.Size?.value && <p className="RR-characteristics-entry">Size: {sizeValue}, percent full: {Math.round(((sizeValue / 5) * 100) * 100) / 100}%</p>} */}
          {/* {props.reviewsMeta.characteristics.Size?.value && <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img>} */}
        </div>
      </div>
    </div>
  )
};

export default RatingsSidebar;