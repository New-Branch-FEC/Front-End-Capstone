import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import CardList from "./CardList.jsx";
import receiveProducts from  "../../index.js";

const RelatedItemsAndComparisons = () => {



  return (
    <>
    <div>RELATED PRODUCTS/COMPARISONS SECTION IS RENDERING</div>

    (
    <div className="component">
      <h2>RELATED ITEMS</h2>

      <div className="Related Items">

        <div>
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            <CardList title="RELATED PRODUCTS" />
          <i class="fa-solid fa-chevron-right"></i>
        </div>

        <div className="Your Outfit">
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            <CardList title="YOUR OUTFIT" />
          <i class="fa-solid fa-chevron-right"></i>i>
        </div>

      </div>

    </div>

  )

  {/* <CardList title="RELATED PRODUCTS" />
  <CardList title="YOUR OUTFIT" /> */}
    </>
  )

};

export default RelatedItemsAndComparisons;