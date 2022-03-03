import React, { useState, useEffect } from 'react';
import Stars from '../Related-items-and-comparisons/Stars.jsx';


const ProductInformation = (props) => {
  return (
    <div className="product-info-section">
      {/* <div className='OV-Rating'> {props.reviews.results[0].rating} stars from Kirby </div> */}
      <div className="overview-stars">
        <Stars className="overview-stars" reviews={props.reviews} />
      </div>
      <div className='OV-Category' style={{"textTransform": "uppercase"}}> {props.currentProduct.category} </div>
      <div className='OV-Name'  > {props.currentProduct.name}</div>
      <div className='OV-Default-Price'> ${props.currentProduct.default_price} </div>
      <div className='OV-Description'> {props.currentProduct.description} </div>
  </div>
  )
}

export default ProductInformation;