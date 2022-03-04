import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import CardList from "./CardList.jsx";

const RelatedItemsAndComparisons = (props) => {

  return (
    <>
      <CardList title="RELATED PRODUCTS" currentProduct={props.currentProduct} reviews={props.reviews} relatedProducts={props.relatedProducts} setRelatedProducts={props.setRelatedProducts} setCurrentProductID={props.setCurrentProductID} showModal={props.showModal} setCardProductFeatures={props.setCardProductFeatures} />

      <CardList title="YOUR OUTFIT" currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} setOutfit={props.setOutfit} relatedProducts={props.relatedProducts} setCurrentProductID={props.setCurrentProductID} />
    </>
  )

};

export default RelatedItemsAndComparisons;