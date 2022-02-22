import React from 'react';
import Stars from '../Related-items-and-comparisons/Stars.jsx';

const RatingsListEntry = (props) => {

  let helpfulClick = (props) => {
    // TODO: this is firing on page load, and not working on actual button click
    console.log('click!');
  }

  // let removeFeedback = (props) => {
  //   console.log(props);
  // }

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
          <Stars reviews={props.reviews} />
          <div>{props.currentReview.rating}</div>
        </div>
        <div className="column-R RR-user-date"> User: {props.currentReview.reviewer_name}// Posted: {prettyDate}</div>
        <h3 className="RR-summary">{props.currentReview.summary}</h3>
        <h4 className="RR-body">{props.currentReview.body}</h4>
        {props.currentReview.photos.map(element => (
          // TODO: make modal to show full size image
          <img className="RR-thumbnail" src={element.url} />
        ))}
        <div>{isRecommended(props)}</div>
        <div>{sellerResponse(props)}</div>
        <div className="RR-feedback">Review Feedback
          <p>Helpful?</p>
          {/* TODO: button increases helpfulness number */}
          <button type="button" className="RR-button" onclick={helpfulClick(props)}>Yes</button>
          <p className="RR-helpfulness"> ({props.currentReview.helpfulness}) </p>
          {/* TODO: button removes feedback from view */}
          <button className="RR-button">Report</button>
        </div>
      </div>
    </div>
  )
};

export default RatingsListEntry;