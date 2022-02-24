import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

//components
import QuestionsAndAnswers from "./components/Questions-and-answers/Questions-and-answers.jsx";
import Overview from "./components/Overview/Overview.jsx";
import RatingsAndReviews from "./components/Ratings-and-reviews/Ratings-and-reviews.jsx";
import RelatedItemsAndComparisons from "./components/Related-items-and-comparisons/RelatedItemsAndComparisons.jsx";
import Comparison from "./components/Related-items-and-comparisons/Comparison.jsx"

const App = () => {




  // setting current product by current product ID, with a default product upon load, "Bright Future Sunglasses"
  const [currentProductID, setCurrentProductID] = useState(37311);
  const [currentProduct, setCurrentProduct] = useState(
    {
      "id": 37311,
      "campus": "hr-rfe",
      "name": "Camo Onesie",
      "slogan": "Blend in to your crowd",
      "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      "category": "Jackets",
      "default_price": "140.00",
      "created_at": "2021-08-13T14:37:33.145Z",
      "updated_at": "2021-08-13T14:37:33.145Z",
      "features": [
          {
              "feature": "Fabric",
              "value": "Canvas"
          },
          {
              "feature": "Buttons",
              "value": "Brass"
          }
      ]
    });
  // getting current product by current product's id
  useEffect(() => {
    axios.get(`/products/${currentProductID}`)
      .then((res) => {
        // console.log('res: ', res); <-- working
        // console.log('res.data', res.data)
        setCurrentProduct(res.data)
      })
      .catch(err => {
        console.log("An error occured while fetching current item", err);
      })
  }, [currentProductID]);

  // setting the default related products for the default product
  const [relatedProducts, setRelatedProducts] = useState([37312, 37313, 37318, 37317])

  // getting the array of related products by current product's id
  useEffect(() => {
    axios.get(`/products/${currentProductID}/related`)
      .then((res) => {
        setRelatedProducts(res.data)
      })
      .catch((err) => {
        console.log("An error occured while fetching related products", err)
      })
  }, [currentProductID]);

  // setting the default reviews for the default product
  const [reviews, setReviews] = useState({
    "product": "37311",
    "page": 0,
    "count": 5,
    "results": [
        {
            "review_id": 1115380,
            "rating": 5,
            "summary": "I mean WOW",
            "recommend": true,
            "response": null,
            "body": "Seriously this is one of the best products I have every purchased. Will be buying again.",
            "date": "2021-12-28T00:00:00.000Z",
            "reviewer_name": "Winn",
            "helpfulness": 22,
            "photos": []
        },
        {
            "review_id": 1135613,
            "rating": 5,
            "summary": "this shirt is awesome",
            "recommend": true,
            "response": null,
            "body": "fits great. highly recommend. here are pics.",
            "date": "2022-02-16T00:00:00.000Z",
            "reviewer_name": "King Meow",
            "helpfulness": 10,
            "photos": [
                {
                    "id": 2180050,
                    "url": "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                },
                {
                    "id": 2180053,
                    "url": "https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1200&q=88&f=e4241cd2c228c6e075a0ac0d54c8ef39"
                },
                {
                    "id": 2180051,
                    "url": "https://s.w-x.co/in-cat_in_glasses.jpg"
                },
                {
                    "id": 2180052,
                    "url": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
                }
            ]
        },
        {
            "review_id": 1135614,
            "rating": 5,
            "summary": "this shirt is awesome",
            "recommend": true,
            "response": null,
            "body": "fits great. highly recommend. here are pics.",
            "date": "2022-02-16T00:00:00.000Z",
            "reviewer_name": "King Meow",
            "helpfulness": 7,
            "photos": [
                {
                    "id": 2180054,
                    "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.757xh;0,0&resize=1200:*"
                }
            ]
        },
        {
            "review_id": 1135617,
            "rating": 5,
            "summary": "this shirt is awesome",
            "recommend": true,
            "response": null,
            "body": "HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs. Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be safe, idempotent, or cacheable.",
            "date": "2022-02-17T00:00:00.000Z",
            "reviewer_name": "King Meow",
            "helpfulness": 2,
            "photos": [
                {
                    "id": 2180060,
                    "url": "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                },
                {
                    "id": 2180063,
                    "url": "https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1200&q=88&f=e4241cd2c228c6e075a0ac0d54c8ef39"
                },
                {
                    "id": 2180061,
                    "url": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
                },
                {
                    "id": 2180062,
                    "url": "https://s.w-x.co/in-cat_in_glasses.jpg"
                }
            ]
        },
        {
            "review_id": 1115293,
            "rating": 5,
            "summary": "UNBELIEVABLE",
            "recommend": true,
            "response": null,
            "body": "Seriously no one could see me so they did not believe me",
            "date": "2021-12-22T00:00:00.000Z",
            "reviewer_name": "Winnie P",
            "helpfulness": 1,
            "photos": []
        }
    ]
  })

  const [reviewsMeta, setReviewsMeta] = useState({
    "product_id": "37311",
    "ratings": {
        "1": "10",
        "2": "16",
        "3": "41",
        "4": "21",
        "5": "91"
    },
    "recommended": {
        "false": "29",
        "true": "150"
    },
    "characteristics": {
        "Fit": {
            "id": 125031,
            "value": "2.9811320754716981"
        },
        "Length": {
            "id": 125032,
            "value": "2.8823529411764706"
        },
        "Comfort": {
            "id": 125033,
            "value": "2.9000000000000000"
        },
        "Quality": {
            "id": 125034,
            "value": "2.9620253164556962"
        }
    }
})

//   reviewMeta axios.get is not being async yet
  useEffect(() => {
      axios.get(`/reviews/meta?product_id=${currentProductID}`)
      .then((res) => {
          setReviewsMeta(res.data)
      })
      .catch(err => {
          console.log("An error occured while fecthing reviewsMeta", err);
      })
  }, [currentProductID]);

  useEffect(() => {
    // console.log('current product id changed', currentProductID)
    axios.get(`/reviews?product_id=${currentProductID}`)
    .then((res) => {
      setReviews(res.data)
    })
    .catch(err => {
      console.log("An error occured while fetching reviews", err);
    })
  }, [currentProductID]);

  // getting the reviews for the current product by current product's id

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

    useEffect(() => {
        axios.get(`/products/${currentProductID}/styles/`)
        .then((res) => {
            setCurrentStyle(res.data);
        })
        .catch((err) => {
            console.log('you have no style', err)
        })
    }, [])

  const [outfit, setOutfit] = useState([37314, 37315, 37320]);
  /*
    // adding to user's outfit array

  /*
    // do this in file where addToBagProductID click event takes place, Anisah!
    let addToBagProductID = 'FIX_ME_TO_ADDED_PRODUCTS_ID' //should always be current product's ID, based on the button being on the current item!
    setOutfit([...outfit, `${addToBagProductID}`])
  */

    // set modal toggle function
const [showModalStatus, setShowModalStatus] = useState(false);


const showModal = (value) => {
    // setShowModalStatus(prev => !prev); // this should toggle it back and forth
    if (value === true) {
        setShowModalStatus(true)

    }
    }

  // setting card productID by click event in Card modal
const [cardProductFeatures, setCardProductFeatures] = useState(currentProductID);

// getting current product by current product's id

useEffect(() => {
    // console.log(cardProductFeatures)
    axios.get(`/products/${cardProductFeatures}`)
    .then((res) => {
        // console.log('res: ', res);
        setCardProductFeatures(res.data)
    })
    .catch(err => {
        console.log("An error occured while fetching card item", err);
    })
}, []);

  return (
     <>
     <div>Hello, World!</div>
     <Overview currentProduct={currentProduct} setCurrentProductID={setCurrentProductID} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} reviews={reviews} outfit={outfit}/>
     {/* <RelatedItemsAndComparisons currentProduct={currentProduct} reviews={reviews} outfit={outfit} relatedProducts={relatedProducts} setCurrentProductID={setCurrentProductID}/> */}
     {/* <Overview currentProduct={currentProduct} currentStyle={currentStyle} reviews={reviews} outfit={outfit}/> */}
     <div className="comparison-and-modal-container">
    <Comparison currentProduct={currentProduct} showModalStatus={showModalStatus} setShowModalStatus={setShowModalStatus} showModal={showModal} cardProductFeatures={cardProductFeatures}/>
    <RelatedItemsAndComparisons setCardProductFeatures={setCardProductFeatures} currentProduct={currentProduct} reviews={reviews} outfit={outfit} relatedProducts={relatedProducts} setCurrentProductID={setCurrentProductID} showModal={showModal}/>
     </div>
     {/* <QuestionsAndAnswers /> */}
     <RatingsAndReviews currentProduct={currentProduct} reviews={reviews} reviewsMeta={reviewsMeta}/>
     </>
   )
};

export default App;
