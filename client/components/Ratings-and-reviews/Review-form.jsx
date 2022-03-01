import React from 'react';

const RatingsForm = (props) => {

  return (
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
                <label htmlFor="Yes">Yes</label>
                <input type="radio" id="No" name="recommended" value="false" />
                <label htmlFor="No">No</label>
              </form>
            </label><br></br>
            <label>Product Characteristics (Select all that apply)<br></br>
              <form><strong>Product Fit:</strong><br></br>
                <input type="radio" id="fit1" name="fit" value="fit1" />
                <label htmlFor="fit1">Runs Tight</label><br></br>
                <input type="radio" id="fit2" name="fit" value="fit2" />
                <label htmlFor="fit2">Runs Slightly Tight</label><br></br>
                <input type="radio" id="fit3" name="fit" value="fit3" />
                <label htmlFor="fit3">Perfect</label><br></br>
                <input type="radio" id="fit4" name="fit" value="fit4" />
                <label htmlFor="fit4">Runs Slightly Long</label><br></br>
                <input type="radio" id="fit5" name="fit" value="fit5" />
                <label htmlFor="fit5">Runs Long</label><br></br>
              </form><br></br>
              <form><strong>Product Length:</strong><br></br>
                <input type="radio" id="length1" name="length" value="length1" />
                <label htmlFor="length1">Runs Short</label><br></br>
                <input type="radio" id="length2" name="length" value="length2" />
                <label htmlFor="length2">Runs Slightly Short</label><br></br>
                <input type="radio" id="length3" name="length" value="length3" />
                <label htmlFor="length3">Perfect</label><br></br>
                <input type="radio" id="length4" name="length" value="length4" />
                <label htmlFor="length4">Runs Slightly Long</label><br></br>
                <input type="radio" id="length5" name="length" value="length5" />
                <label htmlFor="length5">Runs Long</label><br></br>
              </form><br></br>
              <form><strong>Product Comfort:</strong><br></br>
                <input type="radio" id="comfort1" name="comfort" value="comfort1" />
                <label htmlFor="comfort1">Uncomfortable</label><br></br>
                <input type="radio" id="comfort2" name="comfort" value="comfort2" />
                <label htmlFor="comfort2">Slightly Uncomfortable</label><br></br>
                <input type="radio" id="comfort3" name="comfort" value="comfort3" />
                <label htmlFor="comfort3">Ok</label><br></br>
                <input type="radio" id="comfort4" name="comfort" value="comfort4" />
                <label htmlFor="comfort4">Comfortable</label><br></br>
                <input type="radio" id="comfort5" name="comfort" value="comfort5" />
                <label htmlFor="comfort5">Perfect</label><br></br>
              </form>
              <form><strong>Product Fit:</strong><br></br>
                <input type="radio" id="fit1" name="fit" value="fit1" />
                <label htmlFor="fit1">Runs Tight</label><br></br>
                <input type="radio" id="fit2" name="fit" value="fit2" />
                <label htmlFor="fit2">Runs Slightly Tight</label><br></br>
                <input type="radio" id="fit3" name="fit" value="fit3" />
                <label htmlFor="fit3">Perfect</label><br></br>
                <input type="radio" id="fit4" name="fit" value="fit4" />
                <label htmlFor="fit4">Runs Slightly Long</label><br></br>
                <input type="radio" id="fit5" name="fit" value="fit5" />
                <label htmlFor="fit5">Runs Long</label><br></br>
              </form>
              <form><strong>Product Fit:</strong><br></br>
                <input type="radio" id="fit1" name="fit" value="fit1" />
                <label htmlFor="fit1">Runs Tight</label><br></br>
                <input type="radio" id="fit2" name="fit" value="fit2" />
                <label htmlFor="fit2">Runs Slightly Tight</label><br></br>
                <input type="radio" id="fit3" name="fit" value="fit3" />
                <label htmlFor="fit3">Perfect</label><br></br>
                <input type="radio" id="fit4" name="fit" value="fit4" />
                <label htmlFor="fit4">Runs Slightly Long</label><br></br>
                <input type="radio" id="fit5" name="fit" value="fit5" />
                <label htmlFor="fit5">Runs Long</label><br></br>
              </form>
              <br></br>
              <label>
                Summary:<br></br>
                <input type="text" size="50" name="summary" placeholder="Write your title here!"/>
              </label><br></br>
              <label htmlFor="body">
                Body:<br></br>
                <textarea id="body" rows="20" cols="50" maxLength="1000" name="body" placeholder="Tell us about the product!"/>
              </label><br></br>
              <label>
                Your Email:
                <input type="email" id="email" name="email"></input>
              </label>
              <label htmlFor="addFile">
                Add Photos:
                <input type="file" id="addFile" name="addFile"></input>
              </label>
            </label><br></br>
            <input type="submit" value="Submit" />
        </div>
      </div>
  )
}

export default RatingsForm;