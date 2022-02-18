import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

//components
import QuestionsAndAnswers from "./components/Questions-and-answers/Questions-and-answers.jsx";
import Overview from "./components/Overview/Overview.jsx";
import RatingsAndReviews from "./components/Ratings-and-reviews/Ratings-and-reviews.jsx";
import RelatedItemsAndComparisons from "./components/Related-items-and-comparisons/RelatedItemsAndComparisons.jsx";

const App = () => {

  // setting current product by current product ID, with a default product upon load, "Bright Future Sunglasses"
  const [currentProductID, setCurrentProductID] = useState(37312);
  const [currentProduct, setCurrentProduct] = useState(
    {
      "id": 37312,
      "campus": "hr-rfe",
      "name": "Bright Future Sunglasses",
      "slogan": "You've got to wear shades",
      "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
      "category": "Accessories",
      "default_price": "69.00",
      "created_at": "2021-08-13T14:37:33.145Z",
      "updated_at": "2021-08-13T14:37:33.145Z",
      "features": [
          {
              "feature": "Lenses",
              "value": "Ultrasheen"
          },
          {
              "feature": "UV Protection",
              "value": null
          },
          {
              "feature": "Frames",
              "value": "LightCompose"
          }
      ]
    });

  // getting current product by current product's id
  useEffect(() => {
    axios.get(`/products/${currentProductID}`)
      .then((res) => {
        // console.log('res: ', res); <-- working
        setCurrentProduct(res.data)
      })
      .catch(err => {
        console.log("An error occured while fetching current item", error);
      })
  }, []);

  // setting the default related products for the default product
  const [relatedProducts, setRelatedProducts] = useState([37313, 37317, 37316, 37315])

  // getting the array of related products by current product's id
  useEffect(() => {
    axios.get(`/products/${currentProductID}/related`)
      .then((res) => {
        setRelatedProducts(res.data)
      })
      .catch((err) => {
        console.log("An error occured while fetching related products", err)
      })
  }, []);

  // setting the default reviews for the default product
  const [reviews, setReviews] = useState({
    "product": "37312",
    "page": 0,
    "count": 5,
    "results": [
        {
            "review_id": 1135535,
            "rating": 2,
            "summary": "is this working??",
            "recommend": true,
            "response": null,
            "body": "test 111111",
            "date": "2022-02-11T00:00:00.000Z",
            "reviewer_name": "oliver7777",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1135534,
            "rating": 2,
            "summary": "is this working??",
            "recommend": true,
            "response": null,
            "body": "test 111111",
            "date": "2022-02-11T00:00:00.000Z",
            "reviewer_name": "oliver6666",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1135533,
            "rating": 2,
            "summary": "is this working??",
            "recommend": true,
            "response": null,
            "body": "test 111111",
            "date": "2022-02-11T00:00:00.000Z",
            "reviewer_name": "oliver22222",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2179974,
                    "url": "email.com"
                }
            ]
        },
        {
            "review_id": 1135532,
            "rating": 2,
            "summary": "is this working??",
            "recommend": true,
            "response": null,
            "body": "test 111111",
            "date": "2022-02-11T00:00:00.000Z",
            "reviewer_name": "oliver22222",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2179973,
                    "url": "email.com"
                }
            ]
        },
        {
            "review_id": 1135531,
            "rating": 2,
            "summary": "is this working??",
            "recommend": true,
            "response": null,
            "body": "test 111111",
            "date": "2022-02-11T00:00:00.000Z",
            "reviewer_name": "oliver",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2179972,
                    "url": "email.com"
                }
            ]
        }
    ]
  })


  // getting the reviews for the current product by current product's id
  useEffect(() => {
    axios.get(`/reviews?product_id=${currentProductID}`)
    .then((res) => {
      setReviews(res.data)
    })
    .catch(err => {
      console.log("An error occured while fetching reviews", err);
    })
  }, []);

  /*
    // adding to user's outfit array
    const [outfit, setOutfit] = useState([]);

    // do this in file where addToBagProductID click event takes place, Anisah!
    let addToBagProductID = 'FIX_ME_TO_ADDED_PRODUCTS_ID' //should always be current product's ID, based on the button being on the current item!
    setOutfit([...outfit, `${addToBagProductID}`])
  */

  return (
     <>
     <div>Hello, World!</div>
     <Overview />
     <RelatedItemsAndComparisons currentProduct={currentProduct} reviews={reviews}/>
     {/* <QuestionsAndAnswers /> */}
     <RatingsAndReviews />
     </>
   )
};

export default App;
