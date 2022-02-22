import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

import Stars from './Stars.jsx';
import Comparison from './Comparison.jsx';


const Card = (props) => {

  const [cardProduct, setCardProduct] = useState(null);
// for below, maybe promise.all() to fire off all the axios.get reqs at the same time to enhance the loading speed

  useEffect(() => {
    let cardObject = {};
    axios.get(`/products/${props.relatedProductID}`)
      .then((res) => {
        cardObject.name = res.data.name;
        cardObject.default_price = res.data.default_price;
        return axios.get(`/products/${props.relatedProductID}/styles`);
      })
      .then((res) => {
        cardObject.image = res.data.results[0].photos[0].url
        // cardObject.image = 'https://cdn.shopify.com/s/files/1/0185/7770/products/1993DW-edit-front_x1080.png?v=1602864333'

        return axios.get(`/reviews?product_id=${props.relatedProductID}`);
      })
      .then((res) => {
        cardObject.reviews = res.data;
        setCardProduct(cardObject)
      })
      .catch(err => {
        console.log("An error occured while fetching current item", err);
      });
  }, []);

// console.log("cardProduct: ", cardProduct)

if (cardProduct === null) {
  return <div>"Loading"</div>
}

if(props.title === "RELATED PRODUCTS") {
  return (
    <div className="card">
      <img className="comparison-button" src="http://localhost:3000/assets/fullStar.png" />
        <div className="clickable-img" onClick={() => {props.setCurrentProductID(cardProduct.id)}}>
  <img src={cardProduct.image}/>
        </div>
      <div className="container">
        <div>CATEGORY</div>
        <div>{cardProduct.name}</div>
        <div>{cardProduct.default_price}</div>
        <Stars reviews={props.reviews}/>
      </div>
    </div>
  )
} else {
  return (
    <div className="card">
      <div className="container">
        <div>CATEGORY</div>
        <div>{cardProduct.name}</div>
        <div>{cardProduct.default_price}</div>
        <Stars reviews={props.reviews}/>
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