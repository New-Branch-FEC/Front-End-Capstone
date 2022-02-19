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
        console.log("An error occured while fetching current item", err);
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

  // setting style for overview component
  const [currentStyle, setCurrentStyle] = useState(
    {
      "product_id": "37311",
      "results": [
          {
              "style_id": 220998,
              "name": "Forest Green & Black",
              "original_price": "140.00",
              "sale_price": null,
              "default?": true,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  }
              ],
              "skus": {
                  "1281032": {
                      "quantity": 8,
                      "size": "XS"
                  },
                  "1281033": {
                      "quantity": 16,
                      "size": "S"
                  },
                  "1281034": {
                      "quantity": 17,
                      "size": "M"
                  },
                  "1281035": {
                      "quantity": 10,
                      "size": "L"
                  },
                  "1281036": {
                      "quantity": 15,
                      "size": "XL"
                  },
                  "1281037": {
                      "quantity": 4,
                      "size": "XL"
                  }
              }
            }
      ]})
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

  const [outfit, setOutfit] = useState([]);
  /*
    // adding to user's outfit array

    // do this in file where addToBagProductID click event takes place, Anisah!
    let addToBagProductID = 'FIX_ME_TO_ADDED_PRODUCTS_ID' //should always be current product's ID, based on the button being on the current item!
    setOutfit([...outfit, `${addToBagProductID}`])
  */

  return (
     <>
     <div>Hello, World!</div>
     <Overview currentProduct={currentProduct} currentStyle={currentStyle} reviews={reviews} outfit={outfit}/>
     <RelatedItemsAndComparisons currentProduct={currentProduct} reviews={reviews}/>
     {/* <QuestionsAndAnswers /> */}
     <RatingsAndReviews />
     </>
   )
};

export default App;
