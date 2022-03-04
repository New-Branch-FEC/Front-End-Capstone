import React from 'react';
import RatingsListEntry from './Ratings-list-entry.jsx';
import RatingsForm from './Review-form.jsx';

const RatingsList = (props) => {

  let clickMore = () => {
    console.log('show 2 more reviews, if none left remove button');
  }

  let t = document.getElementById("RRtop");

  let clickAdd = () => {
    let e = document.getElementById("RRform");
    if (e.style.display === "none") {
      e.style.display = "block";
      e.scrollIntoView({
        behavior: "smooth"
      })
    } else {
      e.style.display = "none";
      t.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  console.log(props.reviewsMeta)

  let totalReviews = parseInt(props.reviewsMeta.recommended.true) + parseInt(props.reviewsMeta.recommended.false);

  return (
    <div className="column-R RR-ratings-list" id="RRtop">
      <h2>There Are {totalReviews} Reviews For This Product</h2>
      <form>
        <label>Sort by </label>
        <select>
          <option value="relevance">Relevance</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </form>
      <div>
        {props.reviews.results.map((reviews, i) => (
          <RatingsListEntry reviews={props.reviews} key={i} currentReview={props.reviews.results[i]} setReviews={props.setReviews} />
        ))}
      </div>
      <div className="RR-more-and-add">
        <button id="More-reviews RR-button" onClick={clickMore}>More Reviews</button>
        <button id="Add-a-review RR-button" onClick={clickAdd}>Add a Review +</button>
      </div>
      <div style={{display: "none"}} id="RRform">
        <RatingsForm />
      </div>
    </div>
  )
};

export default RatingsList;