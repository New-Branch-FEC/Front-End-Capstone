import React from 'react';
import axios from 'axios';

import CardList from "./CardList.jsx";
import receiveProducts from  "../../index.js";

const RelatedItemsAndComparisons = () => {

  return (
    <>
    <div>RELATED PRODUCTS/COMPARISONS SECTION IS RENDERING</div>
  <CardList title="RELATED PRODUCTS" />
  <CardList title="YOUR OUTFIT" />
    </>
  )

};

export default RelatedItemsAndComparisons;