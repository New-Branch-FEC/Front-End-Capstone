import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import CardList from "./CardList.jsx";

const RelatedItemsAndComparisons = (props) => {

  return (
    <>

    <CardList title="RELATED PRODUCTS" currentProduct={props.currentProduct} reviews={props.reviews}/>

    <CardList title="YOUR OUTFIT" currentProduct={props.currentProduct} reviews={props.reviews}/>

    </>
  )

};

export default RelatedItemsAndComparisons;