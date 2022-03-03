import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

import ProductInformation from './Product-information.jsx';
import SelectThumb from './Style-thumbnails.jsx';
import SelectStyle from './Style-selector.jsx';
import ShareOnline from './Share-to-socials.jsx';
import AddToBag from './Add-to-bag.jsx';

const Overview = (props) => {

  const [mainPhoto, setMainPhoto] = useState(props.currentStyle.results[0].photos[0].url);
  const [thumbnails, setThumbnails] = useState(props.currentStyle.results[0].photos)
  const [styleName, setStyleName] = useState(props.currentStyle.results.name);

  const handleThumb = (item) => {
    setMainPhoto(item.url);
  }

  const handleStyle = (style) => {
    setThumbnails(style.photos);
    setMainPhoto(style.photos[0].url);
    setStyleName(style.name);
  }


  // useEffect(() => {

  // })

  return (
  <div>
    <div>
      < ProductInformation currentProduct={props.currentProduct} currentStyle={props.currentStyle} reviews={props.reviews}/>

      < SelectThumb currentProduct={props.currentProduct} currentStyle={props.currentStyle.results} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} thumbnails={thumbnails} setThumbnails={setThumbnails} handleThumb={handleThumb} />

      < SelectStyle currentProduct={props.currentProduct} currentStyle={props.currentStyle} setCurrentStyle={props.setCurrentStyle} styleName={styleName} setStyleName={setStyleName} handleStyle={handleStyle}/>

      < ShareOnline />

      < AddToBag currentProduct={props.currentProduct} currentStyle={props.currentStyle} />
    </div>
  </div>
  )
};

export default Overview;

