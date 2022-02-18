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

  //if(props.title === "RELATED PRODUCTS") ?



  return (
    <>
    <h2>{props.title}</h2>
    <Card currentProduct={props.currentProduct} reviews={props.reviews}/>
    </>
  )

}

export default CardList;
