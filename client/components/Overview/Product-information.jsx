import React, { useState, useEffect, useContext } from 'react';

const ProductInformation = (props) => {
  return (
    <div>
    Product info will show up hereeee
    {console.log('PROPS FOR INFO', props.currentProduct)}
    <div className='OV-Product'> General Product Information </div>
    <div className='OV-Category'> {props.currentProduct.category} </div>
    <div className='OV-Title'> GAYS ONLY. CHARLES DON'T TOUCH.</div>
    <div className='OV-Default-Price'> $420 </div>
    <div className ='OV-Description'> Do you pass as straight? Not anymore! </div>
  </div>
  )
}

export default ProductInformation;