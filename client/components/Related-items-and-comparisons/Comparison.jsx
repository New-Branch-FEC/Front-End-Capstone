import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

const Comparison = () => {
  // Upon click event, the user will see this comparison card, which takes the card's product and compares it to the currentProduct.

// TODO: How can I use useContext to grab the currentProduct from the App component???

// GET request to https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products (make dynamic ID ':id')
//   Current Product Name (endpoint must  match up with given ID (req.body.name):
//   Current Product Characteristic (req.body.features) <- (this value is an array that must be iterated over with forEach):

// TABLE ELEMENTS
// cardProduct.name
// currentProduct.name

// iterate over the card's product characteristics, and the currentProduct's characteristics

  // If the characteristic is shared (If the compared product value === current product value)
    // render the item with a checkbox in the Compared Product Name column, and in the Current Product Name column
  // else if the characteristic NOT shared,
    // render it with its product checked (and the other unchecked)


      // if (currentProduct.some(item => cardProduct.includes(item)) {

      // }



  return (
    <table>
    <thead>{currentProduct.name}</thead>
    <tr></tr>
    </table>
  )

}

export default Comparison ;