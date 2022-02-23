import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

const Comparison = (props) => {

  if (props.cardProductFeatures?.features === undefined || props.currentProduct?.features === undefined) {
    //console.log("The featues needed to take a second to load here")
    return <div>Loading Card Product Features</div>
  }


  let tableRows = [];
  if(Array.isArray(props.cardProductFeatures?.features)) {

    for (let i = 0; i < props.cardProductFeatures.features?.length; i++) {
      // for (let j = 0; j < props.cardProductFeatures.features.length; j++) {

        if (props.cardProductFeatures.features[i]?.value === props.currentProduct.features[i]?.value) {
          //console.log("the if conditional is working")
          tableRows.push(`✓   ${props.cardProductFeatures.features[i]?.value}   ✓`)
        } else if (props.cardProductFeatures.features[i]?.value !== props.currentProduct.features[i]?.value) {
          tableRows.push(`    ${props.cardProductFeatures.features[i]?.value}   ✓`)
          tableRows.push(`✓   ${props.currentProduct.features[i]?.value}    `)
        }
        // }
      }
      // console.log("tableRows", tableRows) <-- this works
    }

    // If the characteristic is shared (If the compared product value === current product value)
    // render the item with a checkbox in the Compared Product Name column, and in the Current Product Name column
    // else if the characteristic NOT shared,
    // render it with its product checked (and the other unchecked)

      return (

        <>
      {props.showModalStatus ?
      <div className="comparison-modal-background"onClick={() => props.setShowModalStatus(prev => !prev)} >
        <div className="comparison-modal-wrapper">
        <div>COMPARING</div>
          <div className="comparison-modal-content">
              <h4>{props.currentProduct?.name}           {props.cardProductFeatures?.name}</h4>
            <div className="modal-grid">
              <div> {tableRows.map((element, i) => { return <ul key={i} >{element}</ul>})} </div>
            </div>
          </div>
        </div>
      </div> : null}
    </>
  )

}

export default Comparison ;

// TODO: How can I use useContext to grab the currentProduct from the App component???

// GET request to https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products (make dynamic ID ':id')
//   Current Product Name (endpoint must  match up with given ID (req.body.name):
//   Current Product Characteristic (req.body.features) <- (this value is an array that must be iterated over with forEach):

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


// console.log("This is card product features", props.cardProductFeatures.features)
  // Upon click event, the user will see this comparison card, which takes the card's product and compares it to the currentProduct.

//  {props.currentProduct.features[0].feature}: {props.currentProduct.features[0].value}
//   {props.cardProductFeatures.features[0].feature}: {props.cardProductFeatures.features[0].value}
  // console.log("this is current product features", props.currentProduct.features)

  // TODO: check for async error out and add a null placeholder for cardProductFeatures
  // iterate over the card's product characteristics, and the currentProduct's characteristics
  // if (cardProduct === null) {
  //   return <div>Loading Related Products</div>
  // }