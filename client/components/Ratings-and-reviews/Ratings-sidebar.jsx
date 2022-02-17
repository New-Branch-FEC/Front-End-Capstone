import React from 'react';

const RatingsSidebar = () => {
  return (
    <div className="column-L">
      <div className="RR-sidebar">
          <div className="RR-star-rating">
            <p>3.5</p>
            <div>⭐⭐⭐⭐⭐</div>
          </div>
          <p className="RR-recommends">100% of reviewers recommend this product</p>
          <div className="RR-stars-graph">
            <li>5 stars</li>
            <li>4 stars</li>
            <li>3 stars</li>
            <li>2 stars</li>
            <li>1 stars</li>
          </div>
          <div className="RR-characteristics">
            <p className="RR-characteristics-entry">size (mapped)</p>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img>
            <p className="RR-characteristics-entry">comfort (mapped)</p>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/graph-2300680-1917645.png" alt="img placeholder"></img>
          </div>
        </div>
    </div>
  )
};

export default RatingsSidebar;