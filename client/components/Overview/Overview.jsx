import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

import ProductInformation from './Product-information.jsx';
import SelectThumb from './Style-thumbnails.jsx';
import SelectStyle from './Style-selector.jsx';
import ShareOnline from './Share-to-socials.jsx';
import AddToBag from './Add-to-bag.jsx';

const Overview = (props) => {
  // for styles
  // console.log('reviews',props.reviews);
  const [mainPhoto, setMainPhoto] = useState(props.currentStyle.results[0].photos[0].url);
  const [styleName, setStyleName] = useState(props.currentStyle.results[0].name);
  // for size and quantity
  const [sizeAndStock, setSizeAndStock] = useState({});

  // event handler for clicking new image
  const handleThumb = (item) => {
    setMainPhoto(item.url);
  }

  const handleStyle = (style) => {
    // props.setCurrentStyle(style);
    // console.log('STYLE', style);
    setMainPhoto(style.photos[0].url);
    setStyleName(style.name);
    // console.log('meow', style.name)
  }

  return (
  <div>
    <div>
      < ProductInformation currentProduct={props.currentProduct} currentStyle={props.currentStyle} reviews={props.reviews}/>

      < SelectThumb currentProduct={props.currentProduct} currentStyle={props.currentStyle.results} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} handleThumb={handleThumb} />

      < SelectStyle currentProduct={props.currentProduct} currentStyle={props.currentStyle.results} styleName={styleName} setStyleName={setStyleName} handleStyle={handleStyle}/>

      < ShareOnline />

      < AddToBag currentProduct={props.currentProduct} currentStyle={props.currentStyle} />
    </div>
  </div>
  )
};

export default Overview;

