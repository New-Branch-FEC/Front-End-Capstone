import React, {useState} from 'react';
import axios from 'axios';
import RatingsList from './Ratings-list.jsx';
import RatingsSidebar from './Ratings-sidebar.jsx';

const RatingsAndReviews = (props) => {
  return (
    <div className="row RR-header">
      <h1>Ratings and Reviews</h1>
      <RatingsList currentProduct={props.currentProduct} reviews={props.reviews}/>
      <RatingsSidebar currentProduct={props.currentProduct} reviews={props.reviews}/>
    </div>
  )
};

export default RatingsAndReviews;


// example result from GET (with API authorization attached) https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=37311
// {
//   "product": "37311",
//   "page": 0,
//   "count": 5,
//   "results": [
//       {
//           "review_id": 1115288,
//           "rating": 5,
//           "summary": "UNBELIEVABLE",
//           "recommend": true,
//           "response": null,
//           "body": "Seriously no one could see me so they did not believe me",
//           "date": "2021-12-22T00:00:00.000Z",
//           "reviewer_name": "Winston",
//           "helpfulness": 5,
//           "photos": []
//       },
//       {
//           "review_id": 1115743,
//           "rating": 4,
//           "summary": "this is an example",
//           "recommend": true,
//           "response": null,
//           "body": "this is an examplethis is an examplethis is an examplethis is an examplethis is an examplethis is an examplethis is an examplethis is an example",
//           "date": "2022-01-05T00:00:00.000Z",
//           "reviewer_name": "jackson11",
//           "helpfulness": 3,
//           "photos": []
//       },
//       {
//           "review_id": 1115739,
//           "rating": 4,
//           "summary": "okay jackson 22 is ",
//           "recommend": true,
//           "response": null,
//           "body": "okay jackson 22 is trying to send this message twice! okay jackson 22 is trying to send this message twice! ",
//           "date": "2022-01-05T00:00:00.000Z",
//           "reviewer_name": "jackson33",
//           "helpfulness": 2,
//           "photos": []
//       },
//       {
//           "review_id": 1115746,
//           "rating": 5,
//           "summary": "this is just perfect",
//           "recommend": true,
//           "response": null,
//           "body": "this is an examplethis is an examplethis is an examplethis is an examplethis is an examplethis is an examplethis is an examplethis is an example",
//           "date": "2022-01-05T00:00:00.000Z",
//           "reviewer_name": "jacksonPerfect",
//           "helpfulness": 1,
//           "photos": []
//       },
//       {
//           "review_id": 1115797,
//           "rating": 5,
//           "summary": "What a Snap!",
//           "recommend": false,
//           "response": null,
//           "body": "Just like that I was able to rid the world of its population issues! 10/10 ",
//           "date": "2022-01-05T00:00:00.000Z",
//           "reviewer_name": "Thanos",
//           "helpfulness": 0,
//           "photos": []
//       }
//   ]
// }