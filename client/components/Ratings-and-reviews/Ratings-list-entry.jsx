import React from 'react';

const RatingsListEntry = () => {
  return (
    <div>Ratings List Entry Goes Here
      <div className="RR-list-entry">
        <div className="column-L">⭐⭐⭐⭐⭐</div>
        <div className="column-R RR-user-date">User and Date Posted Goes Here (Month, DD, YYYY)</div>
        <div className="RR-summary">Review Summary Goes Here</div>
        <div className="RR-body">Review Body Goes Here</div>
        <div>✔ Recommended (optional)</div>
        <div>Seller Response (optional)</div>
        <div className="RR-feedback">Review Feedback Goes Here
          <p>Helpful?</p>
          <button>Yes</button>
          <p>Number of 'Helpful' Goes Here</p>
          <button>Report</button>
        </div>
      </div>
    </div>
  )
};

export default RatingsListEntry;