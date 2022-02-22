import React, { useState, useEffect } from 'react';
const axios = require('axios');

const AddToBag = (props) => {

    console.log('STYLES', props.currentStyle.results);

    const resultsArray = props.currentStyle.results;
    let sizes = [];
    let quantity = [];

    for (let i = 0; i < resultsArray.length; i++) {
      // reach into results array
      let availableSizesAndQuantity = resultsArray[i].skus;
      console.log(availableSizesAndQuantity);

      for (let j = 0; j < availableSizesAndQuantity.length; j++) {
        quantity.push(availableSizesAndQuantity[j].quantity);
        sizes.push(availableSizesAndQuantity[j].size);
        console.log('INNER LOOP IS WORKING', sizes, quantity);
      }
      // for each index in results array
        // reach into skus array
        // for each index in skus array
        // identify size and quantity values
    }


    return (
    <div>
    <select>
      <option value=''> size </option>
    </select>
    <select>
      <option value=''> quantity </option>
    </select>
    </div>
    )
}

export default AddToBag;

{/* // each option should be mapped over! prop drill styles endpoint down
// props.//.results.skus.id.size */}