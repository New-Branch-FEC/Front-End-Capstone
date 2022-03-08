import React from 'react';

const RatingsListEntry = (props) => {

  let localHelpfulness = props.currentReview.helpfulness;

  let helpfulClick = () => {
    // TODO: update DOM with new localHelpfulness
    localHelpfulness++;
    console.log('localHelpfulness: ', localHelpfulness);
  }

  let reportClick = () => {
    alert("Reported! Thank you for your feedback")
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

  // let urlIsPhoto = (props) => {
  //   for (let i = 0; i < props.currentReview.photos.length; i++) {
  //     let currentURL = props.currentReview.photos[i].url;
  //     if (currentURL.includes('.png' || '.svg' || '.jpg' || '.jpeg' || 'gif')) {
  //       console.log('legitimate photo type found :', props.currentReview.photos[i].url);
  //     }
  // }

  let sellerResponse = (props) => {
    if (props.currentReview.response) {
      return "Seller Response: " + props.currentReview.response;
    }
  }

  let indivStars = (props) => {
    let firstStar;
    let secondStar;
    let thirdStar;
    let fourthStar;
    let fifthStar;

    if (props.currentReview.rating === 1) {
      firstStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      secondStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
      thirdStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
      fourthStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
      fifthStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
    } else if (props.currentReview.rating === 2) {
      firstStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      secondStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      thirdStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
      fourthStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
      fifthStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
    } else if (props.currentReview.rating === 3) {
      firstStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      secondStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      thirdStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      fourthStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
      fifthStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
    } else if (props.currentReview.rating === 4) {
      firstStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      secondStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      thirdStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      fourthStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      fifthStar = <img alt="star rating icon" src="http://localhost:3000/assets/emptyStar.png" />
    } else if (props.currentReview.rating === 5) {
      firstStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      secondStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      thirdStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      fourthStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
      fifthStar = <img alt="star rating icon" src="http://localhost:3000/assets/fullStar.png" />
    } else {
      console.log("something went wrong with star render!")
    }

    return (
      <div className="star-images">
        {firstStar}
        {secondStar}
        {thirdStar}
        {fourthStar}
        {fifthStar}
      </div>
    )
  }

return (
  <div>
    <div className="RR-list-entry">
      <div className="column-L">
        <div>{indivStars(props)}</div>
      </div>
      <div className="column-R RR-user-date"> User: {props.currentReview.reviewer_name}// Posted: {prettyDate}</div>
      <h3 className="RR-summary">{props.currentReview.summary}</h3>
      <h4 className="RR-body">{props.currentReview.body}</h4>
      {props.currentReview.photos.map((element, i) => (
        // TODO: make modal to show full size image
        <img className="RR-thumbnail" src={element.url} key={i} onClick={makeFullSize}></img>
      ))}
      <div>{isRecommended(props)}</div>
      <div>{sellerResponse(props)}</div>
      <div className="RR-feedback">Review Feedback
        <p>Helpful?</p>
        {/* TODO: button increases helpfulness number */}
        <button type="button" className="RR-button" onClick={helpfulClick}>Yes</button>
        <p className="RR-helpfulness"> ({localHelpfulness}) </p>
        {/* TODO: button removes feedback from view */}
        <button className="RR-button" onClick={reportClick}>Report</button>
      </div>
    </div>
  </div>
)
};

export default RatingsListEntry;