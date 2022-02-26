import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

const Comparison = (props) => {

  if (props.cardProductFeatures?.features === undefined || props.currentProduct?.features === undefined) {
    //console.log("The featues needed to take a second to load here")
    return <div>Loading Card Product Features</div>
  }
// default item:
//   {
//     "id": 37311,
//     "campus": "hr-rfe",
//     "name": "Camo Onesie",
//     "slogan": "Blend in to your crowd",
//     "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//     "category": "Jackets",
//     "default_price": "140.00",
//     "created_at": "2021-08-13T14:37:33.145Z",
//     "updated_at": "2021-08-13T14:37:33.145Z",
//     "features": [
//         {
//             "feature": "Fabric",
//             "value": "Canvas"
//         },
//         {
//             "feature": "Buttons",
//             "value": "Brass"
//         }
//     ]
// }

// comparison with bright future sunglasses

// {
//   "id": 37312,
//   "campus": "hr-rfe",
//   "name": "Bright Future Sunglasses",
//   "slogan": "You've got to wear shades",
//   "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
//   "category": "Accessories",
//   "default_price": "69.00",
//   "created_at": "2021-08-13T14:37:33.145Z",
//   "updated_at": "2021-08-13T14:37:33.145Z",
//   "features": [
//       {
//           "feature": "Lenses",
//           "value": "Ultrasheen"
//       },
//       {
//           "feature": "UV Protection",
//           "value": null
//       },
//       {
//           "feature": "Frames",
//           "value": "LightCompose"
//       }
//   ]
// }

  let tableRows = [];
  // create an object that will populate three separate columns in the grid: a boolean value for the presence or absence of a checkmark, and the value of the feature that populates the middle column

  // this if conditional ensures that we iterate over the called cardProduct'd array instead of the default in App.js (which is a string)
  if(Array.isArray(props.cardProductFeatures?.features)) {
    // this for-loop captures both shared features, and features that are only in current product (the else statement). We also have a nested conditional to render the name of the product if it's value is set to null.
    for (let i = 0; i < props.cardProductFeatures.features?.length; i++) {
      let rowObj = {};
      if (props.cardProductFeatures.features[i]?.value === props.currentProduct.features[i]?.value) {
        if (props.cardProductFeatures.features[i]?.value === null) {
          rowObj.featureName = props.cardProductFeatures.features[i]?.feature;
        } else {
          rowObj.featureName = props.cardProductFeatures.features[i]?.value;
        }
        rowObj.doesCurrentProductHaveFeature = true;
        rowObj.doesCardProductHaveFeature = true;
        tableRows.push(rowObj);
      } else if (props.cardProductFeatures.features[i]?.value !== props.currentProduct.features[i]?.value) {
        if (props.cardProductFeatures.features[i]?.value === null) {
          rowObj.featureName = props.cardProductFeatures.features[i]?.feature;
        } else {
          rowObj.featureName = props.cardProductFeatures.features[i]?.value;
        }
        rowObj.doesCurrentProductHaveFeature = false;
        rowObj.doesCardProductHaveFeature = true;
        tableRows.push(rowObj);
      }
      // console.log("tableRows[i].featureName", tableRows[0].featureName)
    }

    // this second for-loop captures any features that are not shared with the card product
    for (let i = 0; i < props.currentProduct.features?.length; i++) {
      let rowObj = {};
      if (!tableRows[i].featureName?.includes(props.currentProduct.features[i]?.value)) {
        // console.log("rowObj.featureName in the 2nd for-loop", rowObj.featureName)
        if (props.currentProduct.features[i]?.value === null) {
          rowObj.featureName = props.currentProduct.features[i]?.feature;
        } else {
          rowObj.featureName = props.currentProduct.features[i]?.value;
        }
        rowObj.featureName = props.currentProduct.features[i]?.value;
        rowObj.doesCurrentProductHaveFeature = true;
        rowObj.doesCardProductHaveFeature = false;
        tableRows.push(rowObj);
      }
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
                      <div className="left-checkmark">{element.doesCurrentProductHaveFeature && "✓"}</div>
                      <div className="compared-characteristic">{element.featureName}</div>
                      <div className="right-checkmark">{element.doesCardProductHaveFeature && "✓"}</div>
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

// const Comparison = (props) => {

//   if (props.cardProductFeatures?.features === undefined || props.currentProduct?.features === undefined) {
//     //console.log("The featues needed to take a second to load here")
//     return <div>Loading Card Product Features</div>
//   }


//   let tableRows = [];
//   if(Array.isArray(props.cardProductFeatures?.features)) {

//     for (let i = 0; i < props.cardProductFeatures.features?.length; i++) {
//       // for (let j = 0; j < props.cardProductFeatures.features.length; j++) {

//         if (props.cardProductFeatures.features[i]?.value === props.currentProduct.features[i]?.value) {
//           //console.log("the if conditional is working")
//           tableRows.push(`✓   ${props.cardProductFeatures.features[i]?.value}   ✓`)
//         } else if (props.cardProductFeatures.features[i]?.value !== props.currentProduct.features[i]?.value) {
//           tableRows.push(`    ${props.cardProductFeatures.features[i]?.value}   ✓`)
//           tableRows.push(`✓   ${props.currentProduct.features[i]?.value}    `)
//         }
//         // }
//       }
//       // console.log("tableRows", tableRows) <-- this works
//     }

//     // If the characteristic is shared (If the compared product value === current product value)
//     // render the item with a checkbox in the Compared Product Name column, and in the Current Product Name column
//     // else if the characteristic NOT shared,
//     // render it with its product checked (and the other unchecked)

//       return (

//         <>
//       {props.showModalStatus ?
//       <div className="comparison-modal-background"onClick={() => props.setShowModalStatus(prev => !prev)} >
//         <div className="comparison-modal-wrapper">
//         <div>COMPARING</div>
//           <div className="comparison-modal-content">
//               <h4>{props.currentProduct?.name}           {props.cardProductFeatures?.name}</h4>
//             <div className="modal-grid">
//               <div> {tableRows.map((element, i) => { return <ul key={i} >{element}</ul>})} </div>
//             </div>
//           </div>
//         </div>
//       </div> : null}
//     </>
//   )

// }

// export default Comparison ;

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