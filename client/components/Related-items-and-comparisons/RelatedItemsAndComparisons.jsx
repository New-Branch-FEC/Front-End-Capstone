import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import CardList from "./CardList.jsx";
import receiveProducts from  "../../index.js";

const RelatedItemsAndComparisons = (props) => {

  return (
    <>

    <CardList title="RELATED PRODUCTS" currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} relatedProducts={props.relatedProducts}/>

    <CardList title="YOUR OUTFIT" currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} relatedProducts={props.relatedProducts}/>

    </>
  )

};

export default RelatedItemsAndComparisons;