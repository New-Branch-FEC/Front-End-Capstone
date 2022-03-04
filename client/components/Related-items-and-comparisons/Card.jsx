import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

import Stars from './Stars.jsx';
import Comparison from './Comparison.jsx';


const Card = (props) => {

  if(props.relatedProductID !== undefined) {

    // to render related products array
    const [cardProduct, setCardProduct] = useState(null);

    // for below, maybe promise.all() to fire off all the axios.get reqs at the same time to enhance the loading speed
    useEffect(() => {
      let cardObject = {};
      axios.get(`/products/${props.relatedProductID}`)
      .then((res) => {
        cardObject.id = res.data.id
        cardObject.name = res.data.name;
        cardObject.altTag= res.data.name;
        cardObject.default_price = res.data.default_price;
        cardObject.fullProductObj =res.data
        return axios.get(`/products/${props.relatedProductID}/styles`)
      })
      .then((res) => {
        cardObject.image = res.data.results[0].photos[0].url
        if(cardObject.id === 37312) {
          cardObject.image = "http://localhost:3000/assets/modelChi.png"
        }
        // cardObject.image = 'https://cdn.shopify.com/s/files/1/0185/7770/products/1993DW-edit-front_x1080.png?v=1602864333' <hardcoded glasses image
        return axios.get(`/reviews?product_id=${props.relatedProductID}`)
      })
      .then((res) => {
        cardObject.reviews = res.data;
        setCardProduct(cardObject)
      })
      .catch(err => {
        console.log("An error occured while fetching current item", err);
      });
    }, []);

    if (cardProduct === null) {
      return <div>Loading Related Products</div>
    }

    return (

      <div className="card">
        <div>
          <img className="comparison-button" alt="comparison button" src="http://localhost:3000/assets/clickStar.png" onClick={() => {props.showModal(true), props.setCardProductFeatures(cardProduct.fullProductObj)}}/>
        </div>

          <div alt={`${cardProduct.altTag}`} className="clickable-img" onClick={() => {props.setCurrentProductID(cardProduct.id)}}>
    <img src={cardProduct.image}/>
          </div>
        <div className="container">
          <div>CATEGORY</div>
          <div>{cardProduct.name}</div>
          <div>{`$${cardProduct.default_price}`}</div>
          <Stars reviews={cardProduct.reviews}/>
        </div>
      </div>
    )

  } else if (props.title === "YOUR OUTFIT") { // TODO: change all cardProduct to cardOutfitProduct

    //to render outfit array:
    const [cardOutfitProduct, setCardOutfitProduct] = useState(null);

    const removeOutfit = (selectedOutfitID) => {

      let updatedOutfit = props.outfit.filter((itemID) => {
        return itemID !== selectedOutfitID;
      })

      // console.log("updatedOutfit upon click event", updatedOutfit)
      props.setOutfit(updatedOutfit);
    }

    useEffect(() => {
      let cardOutfitObject = {};
      axios.get(`/products/${props.outfitID}`)
    .then((res) => {
      // console.log(`THIS IS THE ID AND PRICE FOR EACH ${res.data.name}`, res.data.id, res.data.default_price)<- works
      cardOutfitObject.id = res.data.id
      cardOutfitObject.name = res.data.name;
      cardOutfitObject.altTag =res.data.name;
      cardOutfitObject.default_price = res.data.default_price;
      return axios.get(`/products/${props.outfitID}/styles`)
    })
    .then((res) => {
        // console.log(`THIS IS IMAGE FOR EACH ${res.data.product_id}`, res.data.results[0].photos[0].url) <-- this works! All have an image delivered at this endpoint

        cardOutfitObject.image = res.data.results[0].photos[0].url
        // cardOutfitObject.image = 'https://cdn.shopify.com/s/files/1/0185/7770/products/1993DW-edit-front_x1080.png?v=1602864333' <hardcoded glasses image
        return axios.get(`/reviews?product_id=${props.outfitID}`)
      })
      .then((res) => {
        // console.log("REVIEWS", res.data) <-- this works! All three have reviews
        cardOutfitObject.reviews = res.data;
        setCardOutfitProduct(cardOutfitObject)

      })
      .catch(err => {
        console.log("An error occured while fetching current item", err);
      });
  }, []);

  if (cardOutfitProduct === null) {
    return <div>Loading Outfits</div>
  }
  // TODO: add an onClick event to the className="comparison-button"
  return (
    <div className="card">
    <img className="comparison-button" alt="delete button" src="http://localhost:3000/assets/deleteButton.png" onClick={() => removeOutfit(cardOutfitProduct.id)}/>
      <div className="clickable-img" alt={`${cardOutfitProduct.altTag}`} onClick={() => {props.setCurrentProductID(cardOutfitProduct.id) }}>
<img src={cardOutfitProduct.image}/>
      </div>
    <div className="container">
      <div>CATEGORY</div>
      <div>{cardOutfitProduct.name}</div>
      <div>{`$${cardOutfitProduct.default_price}`}</div>
      <Stars reviews={cardOutfitProduct.reviews}/>
    </div>
  </div>
  )

}

}

export default Card;



//**********  NOTES  ************//

//  onClick={() => {setCurrentProductID(res.data)}}

//
//if(props.title === "RELATED PRODUCTS")

// Product category(req.body.category):
// Product name (req.body.name):
// Product price (req.body.default_price):

// for the image URL :
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311/styles/

// console.log("CardList HERE", props.currentProduct)

// THREE click events, two in top right corner: one toggled for related products that brings up comparison card; the other toggled to "current product" that deletes the card upon click
// if the user clicks the image, update the currentProduct to the clicked product!

// location of image
// props.currentProduct.results[0].photos[0].url


// if (cardProduct === null) {
//   return <div>Loading</div>
// }

// if(props.title === "RELATED PRODUCTS") {
//   // return (
//   //   <div className="card">
//   //     <img className="comparison-button" src="http://localhost:3000/assets/fullStar.png" onClick={() => {<Comparison/>}}/>
//   //       <div className="clickable-img" onClick={() => {props.setCurrentProductID(cardProduct.id)}}>
//   // <img src={cardProduct.image}/>
//   //       </div>
//   //     <div className="container">
//   //       <div>CATEGORY</div>
//   //       <div>{cardProduct.name}</div>
//   //       <div>{cardProduct.default_price}</div>
//   //       <Stars reviews={cardProduct.reviews}/>
//   //     </div>
//   //   </div>
//   // )
// } else if (props.title === "YOUR OUTFIT") { // TODO: change all cardProduct to cardOutfitProduct
//   return (
//     <div className="card">
//       <div className="container">
//         <div>CATEGORY</div>
//         <div>{cardOutfitProduct.name}</div>
//         <div>{cardOutfitProduct.default_price}</div>
//         <Stars reviews={cardOutfitProduct.reviews}/>
//       </div>
//     </div>
//   )
// }