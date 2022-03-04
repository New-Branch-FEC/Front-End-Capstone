import React from 'react';

const RatingsForm = (props) => {

  let v = document.getElementById("RRtop")

  let clickSubmit = () => {
    alert("Review submitted!");
    v.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <div className="RR-add-rating">
      <br></br>
      <br></br>
      <label>
        Username: *
        <input type="text" name="name" /><br></br>
      </label>
      <br></br>
      <label>
        Email: *
        <input type="email" id="email" name="email"></input>
      </label>
      <br></br>
      <br></br>
      <label>
        🌟 Rating: *
        <input type="number" name="rating" min="1" max="5" />
      </label>
      <br></br>
      <label>
        <br></br>
        Would you recommend this product? *
        <form>
          <input type="radio" id="Yes" name="recommended" value="true" />
          <label htmlFor="Yes">Yes</label>
          <input type="radio" id="No" name="recommended" value="false" />
          <label htmlFor="No">No</label>
        </form>
      </label>
      <br></br>
      <label><h3><strong>Product Characteristics (Select all that apply)</strong></h3>
        <br></br>
        <div className="column-form-L">
        <form><strong>Product Fit:</strong>
          <br></br>
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
        <form><strong>Product Length:</strong>
          <br></br>
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
        </form>
        <br></br>
        <form><strong>Product Comfort:</strong>
          <br></br>
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
        <br></br>
        </div>
        <div className="column-form-R">
        <form><strong>Product Quality:</strong>
          <br></br>
          <input type="radio" id="quality1" name="quality" value="quality1" />
          <label htmlFor="quality1">Poor</label><br></br>
          <input type="radio" id="quality2" name="quality" value="quality2" />
          <label htmlFor="quality2">Below Average</label><br></br>
          <input type="radio" id="quality3" name="quality" value="quality3" />
          <label htmlFor="quality3">What I Expected</label><br></br>
          <input type="radio" id="quality4" name="quality" value="quality4" />
          <label htmlFor="quality4">Pretty Great</label><br></br>
          <input type="radio" id="quality5" name="quality" value="quality5" />
          <label htmlFor="quality5">Perfect</label><br></br>
        </form>
        <br></br>
        <form><strong>Product Width:</strong><br></br>
          <input type="radio" id="width1" name="width" value="width1" />
          <label htmlFor="width1">Too Narrow</label><br></br>
          <input type="radio" id="width2" name="width" value="width2" />
          <label htmlFor="width2">Slightly Narrow</label><br></br>
          <input type="radio" id="width3" name="width" value="width3" />
          <label htmlFor="width3">Perfect</label><br></br>
          <input type="radio" id="width4" name="width" value="width4" />
          <label htmlFor="width4">Slightly Wide</label><br></br>
          <input type="radio" id="width5" name="width" value="width5" />
          <label htmlFor="width5">Too Wide</label><br></br>
        </form>
        <br></br>
        <form><strong>Product Size:</strong>
          <br></br>
          <input type="radio" id="size1" name="size" value="size1" />
          <label htmlFor="size1">A Size Too Small</label><br></br>
          <input type="radio" id="size2" name="size" value="size2" />
          <label htmlFor="size2">½ Size Too Small</label><br></br>
          <input type="radio" id="size3" name="size" value="size3" />
          <label htmlFor="size3">Perfect</label><br></br>
          <input type="radio" id="size4" name="size" value="size4" />
          <label htmlFor="size4">½ Size Too Big</label><br></br>
          <input type="radio" id="size5" name="size" value="size5" />
          <label htmlFor="size5">A Size Too Big</label><br></br>
        </form>
        <br></br>
        </div>
        <label><h3><strong>Write Your Review *</strong></h3>
          <input type="text" size="50" name="summary" placeholder="Write your title here!" />
        </label><br></br>
        <label htmlFor="body">
          <textarea id="body" rows="20" cols="75" maxLength="1000" name="body" placeholder="Tell us about the product!" />
        </label>
        <br></br>
        <br></br>
        <label htmlFor="addFile">
          Add Photos:
          <input type="file" id="addFile" name="addFile"></input>
        </label>
      </label>
      <br></br>
      <input type="submit" value="Submit" onClick={clickSubmit}/>
    </div>
  )
}

export default RatingsForm;