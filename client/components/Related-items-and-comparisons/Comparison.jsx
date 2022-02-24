import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

const Comparison = (props) => {

  if (props.cardProductFeatures?.features === undefined || props.currentProduct?.features === undefined) {
    //console.log("The featues needed to take a second to load here")
    return <div>Loading Card Product Features</div>
  }


  let tableRows = [];
  // create an object that will populate three separate columns in the grid: a boolean value for the presence or absence of a checkmark, and the value of the feature that populates the middle column

  // this if conditional ensures that we iterate over the called cardProduct instead of the default in App.js (which is a string)
  if(Array.isArray(props.cardProductFeatures?.features)) {
    // this for-loop captures both shared features, and features that are only in current product (the else statement)
    for (let i = 0; i < props.cardProductFeatures.features?.length; i++) {
      let rowObj = {};
      if (props.cardProductFeatures.features[i]?.value === props.currentProduct.features[i]?.value) {
        rowObj.featureName = props.cardProductFeatures.features[i]?.value;
        rowObj.doesCurrentProductHaveFeature = true;
        rowObj.doesCardProductHaveFeature = true;
      } else if (props.cardProductFeatures.features[i]?.value !== props.currentProduct.features[i]?.value) {
        rowObj.featureName = props.cardProductFeatures.features[i]?.value;
        rowObj.doesCurrentProductHaveFeature = false;
        rowObj.doesCardProductHaveFeature = true;
      }
      tableRows.push(rowObj);
    }
    // this second for-loop captures any features that are not shared with the card product
    for (let i = 0; i < props.currentProduct.features?.length; i++) {
      let rowObj = {};
      if (tableRows[i].featureName !== props.currentProduct.features[i]?.value) {
        console.log("rowObj.featureName in the 2nd for-loop", rowObj.featureName)
        rowObj.featureName = props.cardProductFeatures.features[i]?.value;
        rowObj.doesCurrentProductHaveFeature = true;
        rowObj.doesCardProductHaveFeature = false;
      }
      tableRows.push(rowObj);
    }
  }


    /*
    Example of what data should look like in tableRows:
      [
        {
          featureName: "100% Cotton",
          doesCurrentProductHaveFeature: false,
          doesCardProductHaveFeature: true,
        }
      ]


    */

  console.log("tableRows", tableRows);

  return (
    <>
      {props.showModalStatus &&
        <div className="comparison-modal-background"onClick={() => props.setShowModalStatus(prev => !prev)} >
          <div className="comparison-modal-wrapper">
          <div>COMPARING</div>
            <div className="comparison-modal-content">
              <div className="comparision-modal-header">
                <div>{props.currentProduct?.name}</div>
                <div>{props.cardProductFeatures?.name}</div>
              </div>
              <div className="modal-grid">
                <div>
                  {tableRows.map((element, i) => (
                    <div key={i} className="comparison-modal-grid-row">
                      <div>{element.doesCurrentProductHaveFeature && "✓"}</div>
                      <div>{element.featureName}</div>
                      <div>{element.doesCardProductHaveFeature && "✓"}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
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