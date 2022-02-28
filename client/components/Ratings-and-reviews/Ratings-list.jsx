import React from 'react';
import RatingsListEntry from './Ratings-list-entry.jsx';

const RatingsList = (props) => {

  let clickMore = () => {
    console.log('show 2 more reviews, if none left remove button');
  }

  let clickAdd = () => {
    console.log('open a modal to add a new review to DOM');
  }

  return (
    <div className="column-R RR-ratings-list">Ratings List Goes Here
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
      <div>Add a Review (form, default hidden)
        <div>
            <label>
              Username:
              <input type="text" name="name" />
            </label><br></br>
            <label>
              🌟 Rating:
              <input type="number" name="rating" min="1" max="5"/>
            </label>
            <label><br></br>
              Would you recommend this product?
              <form>
                <input type="radio" id="Yes" name="recommended" value="true" />
                <label for="Yes">Yes</label>
                <input type="radio" id="No" name="recommended" value="false" />
                <label for="No">No</label>
              </form>
            </label>
            <label>Product Characteristics (Select all that apply)<br></br>
              <form><strong>Product Fit:</strong><br></br>
                <input type="radio" id="fit1" name="fit" value="fit1" />
                <label for="fit1">Runs Tight</label><br></br>
                <input type="radio" id="fit2" name="fit" value="fit2" />
                <label for="fit2">Runs Slightly Tight</label><br></br>
                <input type="radio" id="fit3" name="fit" value="fit3" />
                <label for="fit3">Perfect</label><br></br>
                <input type="radio" id="fit4" name="fit" value="fit4" />
                <label for="fit4">Runs Slightly Long</label><br></br>
                <input type="radio" id="fit5" name="fit" value="fit5" />
                <label for="fit5">Runs Long</label><br></br>
              </form>
              <form><strong>Product Length:</strong><br></br>
                <input type="radio" id="length1" name="length" value="length1" />
                <label for="length1">Runs Short</label><br></br>
                <input type="radio" id="length2" name="length" value="length2" />
                <label for="length2">Runs Slightly Short</label><br></br>
                <input type="radio" id="length3" name="length" value="length3" />
                <label for="length3">Perfect</label><br></br>
                <input type="radio" id="length4" name="length" value="length4" />
                <label for="length4">Runs Slightly Long</label><br></br>
                <input type="radio" id="length5" name="length" value="length5" />
                <label for="length5">Runs Long</label><br></br>
              </form>
              <form><strong>Product Comfort:</strong><br></br>
                <input type="radio" id="comfort1" name="comfort" value="comfort1" />
                <label for="comfort1">Uncomfortable</label><br></br>
                <input type="radio" id="comfort2" name="comfort" value="comfort2" />
                <label for="comfort2">Slightly Uncomfortable</label><br></br>
                <input type="radio" id="comfort3" name="comfort" value="comfort3" />
                <label for="comfort3">Ok</label><br></br>
                <input type="radio" id="comfort4" name="comfort" value="comfort4" />
                <label for="comfort4">Comfortable</label><br></br>
                <input type="radio" id="comfort5" name="comfort" value="comfort5" />
                <label for="comfort5">Perfect</label><br></br>
              </form>
              <form><strong>Product Fit:</strong><br></br>
                <input type="radio" id="fit1" name="fit" value="fit1" />
                <label for="fit1">Runs Tight</label><br></br>
                <input type="radio" id="fit2" name="fit" value="fit2" />
                <label for="fit2">Runs Slightly Tight</label><br></br>
                <input type="radio" id="fit3" name="fit" value="fit3" />
                <label for="fit3">Perfect</label><br></br>
                <input type="radio" id="fit4" name="fit" value="fit4" />
                <label for="fit4">Runs Slightly Long</label><br></br>
                <input type="radio" id="fit5" name="fit" value="fit5" />
                <label for="fit5">Runs Long</label><br></br>
              </form>
              <form><strong>Product Fit:</strong><br></br>
                <input type="radio" id="fit1" name="fit" value="fit1" />
                <label for="fit1">Runs Tight</label><br></br>
                <input type="radio" id="fit2" name="fit" value="fit2" />
                <label for="fit2">Runs Slightly Tight</label><br></br>
                <input type="radio" id="fit3" name="fit" value="fit3" />
                <label for="fit3">Perfect</label><br></br>
                <input type="radio" id="fit4" name="fit" value="fit4" />
                <label for="fit4">Runs Slightly Long</label><br></br>
                <input type="radio" id="fit5" name="fit" value="fit5" />
                <label for="fit5">Runs Long</label><br></br>
              </form>
              <label>
                Summary:
                <input type="text" size="50" name="summary" />
              </label><br></br>
              <label>
                Body:
                <input type="text" size="1000" name="body" />
              </label><br></br>
              <label>
                Your Email:
                <input type="email"></input>
              </label>
              <label for="addFile">
                Add Photos:
                <input type="file" id="addFile" name="addFile"></input>
              </label>
            </label>
            <input type="submit" value="Submit" />
        </div>
      </div>
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