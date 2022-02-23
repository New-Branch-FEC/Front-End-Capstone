import React from 'react';
import IndivStars from './Indiv-Stars.jsx';

const RatingsListEntry = (props) => {

  let helpfulClick = () => {
    // TODO: make props.currentReview.helpfulness++
    console.log('click!');
  }

  let reportClick = () => {
    console.log('reported and deported!');
  }

  let makeFullSize = () => {
    console.log('imagine this picture is bigger!');
  }

  let months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let uglyDate = props.currentReview.date.slice(0, 10);
  let uglyMonth = uglyDate[5] + uglyDate[6];
  let prettyYear = uglyDate.slice(0, 4);
  let prettyDay = uglyDate.slice(8, 10)
  let prettyDate = months[parseInt(uglyMonth)] + " " + prettyDay + ", " + prettyYear;

  let isRecommended = (props) => {
    if (props.currentReview.recommend) {
      return "Recommended: ✅";
    }
  }

  let sellerResponse = (props) => {
    if (props.currentReview.response) {
      return "Seller Response: " + props.currentReview.response;
    }
  }

  return (
    <div>Ratings List Entry Goes Here
      <div className="RR-list-entry">
        <div className="column-L">
          {/* TODO: Needs to just load one star per review */}
          {/* <Stars reviews={props.reviews} /> */}
          {/* <IndivStars currentReview={props.currentReview}/> */}
          <div>{props.currentReview.rating} Stars</div>
        </div>
        <div className="column-R RR-user-date"> User: {props.currentReview.reviewer_name}// Posted: {prettyDate}</div>
        <h3 className="RR-summary">{props.currentReview.summary}</h3>
        <h4 className="RR-body">{props.currentReview.body}</h4>
        {props.currentReview.photos.map((element, i) => (
          // TODO: make modal to show full size image
          <img className="RR-thumbnail" src={element.url} key={i} onClick={makeFullSize}/>
        ))}
        <div>{isRecommended(props)}</div>
        <div>{sellerResponse(props)}</div>
        <div className="RR-feedback">Review Feedback
          <p>Helpful?</p>
          {/* TODO: button increases helpfulness number */}
          <button type="button" className="RR-button" onClick={helpfulClick}>Yes</button>
          <p className="RR-helpfulness"> ({props.currentReview.helpfulness}) </p>
          {/* TODO: button removes feedback from view */}
          <button className="RR-button" onClick={reportClick}>Report</button>
        </div>
      </div>
    </div>
  )
};

export default RatingsListEntry;