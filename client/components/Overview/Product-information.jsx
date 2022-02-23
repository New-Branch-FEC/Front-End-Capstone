import React, { useState, useEffect } from 'react';

const ProductInformation = (props) => {
  return (
    <div>
    <div className='OV-Rating'> {props.reviews.results[0].rating} stars from Kirby </div>
    <div className='OV-Category'> {props.currentProduct.category} </div>
    <div className='OV-Name'> {props.currentProduct.name}</div>
    <div className='OV-Default-Price'> {props.currentProduct.default_price} USD </div>
    <div className='OV-Description'> {props.currentProduct.description} </div>
  </div>
  )
}

export default ProductInformation;