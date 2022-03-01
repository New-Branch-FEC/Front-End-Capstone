import React from 'react';
import RatingsListEntry from './Ratings-list-entry.jsx';
import RatingsForm from './Review-form.jsx';

const RatingsList = (props) => {

  let clickMore = () => {
    console.log('show 2 more reviews, if none left remove button');
  }

  let clickAdd = () => {
    console.log('open a modal to add a new review to DOM');
  }

  return (
    <div className="column-R RR-ratings-list">
      <h2>There Are {props.reviews.results.length} Reviews For This Product</h2>
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
          <RatingsListEntry reviews={props.reviews} key={i} currentReview={props.reviews.results[i]} />
        ))}
      </div>
      <div className="RR-more-and-add">
        <button id="More-reviews RR-button" onClick={clickMore}>More Reviews</button>
        <button id="Add-a-review RR-button" onClick={clickAdd}>Add a Review +</button>
      </div>
      <RatingsForm />
    </div>
  )
};
{/* <img className="comparison-button" src="http://localhost:3000/assets/clickStar.png" onClick={() => {props.showModal(true), props.setCardProductFeatures(cardProduct.fullProductObj)}}/> */}
{/* // () => {props.showReviewModal(true)} */}
export default RatingsList;

{/* // Form contents (Modal? default hidden, 'add a review' unhides):
// 1. Overall Rating*
//   1 star- "Poor"
//   2 stars- "Fair"
//   3 stars- "Average"
//   4 stars- "Good"
//   5 stars- "Great"

// 2. Do you recommend this product?*
//   radio button yes/no

// 3. Characteristics*
//   choice of all characteristics, 1-5

//   Size
//     A size too small
//     ½ a size too small
//     Perfect
//     ½ a size too big
//     A size too wide
//   Width
//     Too narrow
//     Slightly narrow
//     Perfect
//     Slightly wide
//     Too wide
//   Comfort
//     Uncomfortable
//     Slightly uncomfortable
//     Ok
//     Comfortable
//     Perfect
//   Quality
//     Poor
//     Below average
//     What I expected
//     Pretty great
//     Perfect
//   Length
//     Runs Short
//     Runs slightly short
//     Perfect
//     Runs slightly long
//     Runs long
//   Fit
//     Runs tight
//     Runs slightly tight
//     Perfect
//     Runs slightly long
//     Runs long

// 4. Review summary* (60 chars)

// 5. Review body* (1000 chars)

// 6. Upload photos

// 7. Username*

// 8. Email*

// 9 Submit button (upload to DOM) */}