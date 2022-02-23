import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

const Comparison = (props) => {

// setting current product by current product ID, with a default product upon load, "Bright Future Sunglasses"
// const [cardProductFeatures, setCardProductFeatures] = useState(37312);

// // getting current product by current product's id
// useEffect(() => {
//   axios.get(`/products/${cardProductFeatures}`)
//     .then((res) => {
//       // console.log('res: ', res); <-- working
//       setCardProductFeatures(res.data)
//     })
//     .catch(err => {
//       console.log("An error occured while fetching card item", err);
//     })
// }, []);


console.log("This is card product features", props.cardProductFeatures)
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

  console.log('the comparison card is called up')
  return (

    <>
    {props.showModalStatus ?
    <div className="comparison-modal-background"onClick={() => props.setShowModalStatus(prev => !prev)} >
      <div className="comparison-modal-wrapper">
      <div>COMPARING</div>
        <div className="comparison-modal-content">
           <div className="modal-grid">

             <h4>{props.currentProduct.name} comparing against: {props.cardProductFeatures.name}</h4>

             <p>✓ {props.currentProduct.features[0].feature}: {props.currentProduct.features[0].value}</p>

             <p>✓ {props.cardProductFeatures.features[0].feature}: {props.cardProductFeatures.features[0].value}</p>
           </div>

        </div>
      </div>
    </div> : null}
    </>
  )

}

export default Comparison ;