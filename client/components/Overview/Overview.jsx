import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

import ProductInformation from './Product-information.jsx';
import SelectThumb from './Style-thumbnails.jsx';
import SelectStyle from './Style-selector.jsx';
import ShareOnline from './Share-to-socials.jsx';
import AddToBag from './Add-to-bag.jsx';

const Overview = (props) => {

  const stylesObject = {};
  props.currentStyle.results.forEach(style => {
    stylesObject[style.name] = style.photos;
  })

  // console.log('PROPS', props.currentStyle);
  // console.log('STYLES OBJECT', stylesObject);

  const [mainPhoto, setMainPhoto] = useState("https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80");
  const [styleName, setStyleName] = useState(props.currentStyle.results[0].name);

  const handleThumb = (item) => {
    setMainPhoto(item.url);
  }

  const handleStyle = (style) => {
    console.log('style', style);
    setMainPhoto(style.photos[0].url);
    setStyleName(style.name);
  }

  return (
  <div>
    <div>
      < ProductInformation currentProduct={props.currentProduct} currentStyle={props.currentStyle} reviews={props.reviews}/>

      < SelectThumb currentProduct={props.currentProduct} currentStyle={props.currentStyle.results} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} handleThumb={handleThumb} />

      < SelectStyle currentProduct={props.currentProduct} currentStyle={props.currentStyle.results} setCurrentStyle={props.setCurrentStyle} styleName={styleName} setStyleName={setStyleName} handleStyle={handleStyle}/>

      < ShareOnline />

      < AddToBag currentProduct={props.currentProduct} currentStyle={props.currentStyle} />
    </div>
  </div>
  )
};

export default Overview;

