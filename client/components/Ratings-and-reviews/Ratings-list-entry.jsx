import React from 'react';

const RatingsListEntry = (props) => {
  console.log('props.reviews in ratingsListEntry: ', props.reviews);

  return (
    <div>Ratings List Entry Goes Here
      <div className="RR-list-entry">
        <div className="column-L">{props.currentReview.rating} STARS</div>
        <div className="column-R RR-user-date"> {props.currentReview.reviewer_name} {props.currentReview.date} (Need to change to: Month, DD, YYYY)</div>
        <h3 className="RR-summary">{props.currentReview.summary}</h3>
        <h4 className="RR-body">{props.currentReview.body}</h4>
        {/* TODO: Recommended logic, hide if false, show checkmark if true */}
        <div>Recommended: ✅</div>
        {/* TODO: Recommended logic, hide if null, show if true */}
        <div>Seller Response: {props.currentReview.response}</div>
        <div className="RR-feedback">Review Feedback
          <p>Helpful?</p>
          {/* TODO: button increases helpfulness number */}
          <button className="RR-button">Yes</button>
          <p> {props.currentReview.helpfulness} </p>
          {/* TODO: button removes feedback from view */}
          <button className="RR-button">Report</button>
        </div>
      </div>
    </div>
  )
};

export default RatingsListEntry;