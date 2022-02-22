import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

import Card from './Card.jsx';

const CardList = (props) => {

  // GET /products/:product_id/related <- (this returned value is an array that must be iterated over with forEach)

  //   if (name="left")
  //   decrement through card array
  //   if (card array index is 0, toggle arrow to "HIDE"
  // else if (name="right")
  //   increment through card array
  //   if (card array index is its length -1, toggle arrow to "HIDE"

  // console.log("is this defined?", props.setCurrentProductID) <-- working
  // console.log("HEREHERHERHERHEHREHREHREHREHR", props.outfit)

  if(props.title === "RELATED PRODUCTS") {
    return (
      <div className="card-list">
      <h2>{props.title}</h2>
      {props.relatedProducts.map((relatedProductID, index) => (
        <Card relatedProductID={relatedProductID} index={index} currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} relatedProducts={props.relatedProducts} title={props.title} setCurrentProductID={props.setCurrentProductID}/>
      ))}
      </div>
    )
  } else if (props.title === "YOUR OUTFIT") {
    return (
      <div className="card-list">
      <h2>{props.title}</h2>
      {props.outfit.map((outfitID, index) => (
        <Card outfitID={outfitID} index={index} currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} relatedProducts={props.relatedProducts} title={props.title} setCurrentProductID={props.setCurrentProductID}/>
      ))}
      </div>
    )
  }






// the original that was working!
  // return (
  //   <div className="card-list">
  //   <h2>{props.title}</h2>
  //   {props.relatedProducts.map((relatedProductID, index) => (
  //     <Card relatedProductID={relatedProductID} index={index} currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} relatedProducts={props.relatedProducts} title={props.title} setCurrentProductID={props.setCurrentProductID}/>
  //   ))}
  //   </div>
  // )

}

export default CardList;
