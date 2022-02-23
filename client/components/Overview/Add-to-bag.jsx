import React, { useState, useEffect } from 'react';
const axios = require('axios');

const AddToBag = (props) => {

    // console.log(props.currentStyle.results);

    const resultsArray = props.currentStyle.results;
    let sizes = [];
    let quantity = [];

    resultsArray.forEach(style => {
      let availableSizesAndQuantity = style.skus;
      Object.keys(availableSizesAndQuantity).forEach(style => {
        quantity.push(availableSizesAndQuantity[style].quantity);
        sizes.push(availableSizesAndQuantity[style].size);
    })
  })

    for (let i = 0; i < resultsArray.length; i++) {
      // reach into results array
      let availableSizesAndQuantity = resultsArray[i].skus;
      // console.log('IS THIS AN OBJECT', availableSizesAndQuantity);
        // for each inside of here to access each individual sku
      Object.keys(availableSizesAndQuantity).forEach(style => {
        quantity[style] = availableSizesAndQuantity[style].quantity
        sizes[style] = availableSizesAndQuantity[style].size;
      });

    }

    // console.log('MEOW????', quantity, sizes);
      // WE HAVE TURNED IT INTO AN ARRAYYYYYYY
        // NOW WE MUST MAP IT IN THE OPTIONS

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