import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

const Comparison = (props) => {

  if (props.cardProductFeatures?.features === undefined || props.currentProduct?.features === undefined) {
    return <div>Loading Card Product Features</div>
  }

  let tableRows = [];
  // create an object that will populate three separate columns in the grid: a boolean value for the presence or absence of a checkmark, and the value of the feature that populates the middle column

  // this if conditional ensures that we iterate over the called cardProduct'd array instead of the default in App.js (which is a string)
  if (Array.isArray(props.cardProductFeatures?.features)) {
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
    }

    // this second for-loop captures any features that are not shared with the card product
    for (let i = 0; i < props.currentProduct.features?.length; i++) {
      let rowObj = {};
      if (!tableRows[i].featureName?.includes(props.currentProduct.features[i]?.value)) {
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
        <div className="comparison-modal-background" onClick={() => props.setShowModalStatus(prev => !prev)} >
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

export default Comparison;