import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

import Stars from './Stars.jsx';
import Comparison from './Comparison.jsx';


const Card = (props) => {

//if(props.title === "RELATED PRODUCTS")

// Product category(req.body.category):
// Product name (req.body.name):
// Product price (req.body.default_price):

// for the image URL :
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37311/styles/

// console.log("CardList HERE", props.currentProduct)

// THREE click events, two in top right corner: one toggled for related products that brings up comparison card; the other toggled to "current product" that deletes the card upon click
// if the user clicks the image, update the currentProduct to the clicked product!

let imageSource = props.currentProduct.results//[0].photos[0].url
let href = ''

console.log(" image source: ", imageSource)


if(props.title === "RELATED PRODUCTS") {
  return (
    <div className="card">
      <div className="col-lg-3 col-md-3">
        <div className="clickable-img">
  {/* <a href={props.currentProduct.results[0].photos[0].url}><img src='https://i.imgur.com/fe0T4nw.png' onClick={() => {setCurrentProductID(res.data)}} /></a> */}
        </div>
      </div>
      <div className="container">
        <div>CATEGORY</div>
        <div>{props.currentProduct.name}</div>
        <div>{props.currentProduct.default_price}</div>
        <Stars reviews={props.reviews}/>
      </div>
    </div>
  )
} else {
  return (
    <div className="card">
      <div className="container">
        <div>CATEGORY</div>
        <div>{props.currentProduct.name}</div>
        <div>{props.currentProduct.default_price}</div>
        <Stars reviews={props.reviews}/>
      </div>
    </div>
  )
}

}

export default Card;