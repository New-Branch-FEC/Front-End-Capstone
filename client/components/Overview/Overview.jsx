import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

import ProductInformation from './Product-information.jsx';
import SelectStyle from './Style-selector.jsx';
import ShareOnline from './Share-to-socials.jsx';
import AddToBag from './Add-to-bag.jsx';

const Overview = (props) => {
  // console.log('props', props);
  // move all the states into here
  // for styles
  const [mainPhoto, setMainPhoto] = useState(props.currentStyle.results[0].photos[0].url);
  const [styleName, setStyleName] = useState(props.currentStyle.results[0].name);
  // for size and quantity
  const [sizeAndStock, setSizeAndStock] = useState({});

  // event handler for clicking new image
  const changeImage = (click) => {
    // setMainPhoto(item.photos[0].url);
    // setSmallPhotos(item.photos);

  }



  return (
  <div>
    <div>
      < ProductInformation currentProduct={props.currentProduct} currentStyle={props.currentStyle} reviews={props.reviews}/>

      < SelectStyle currentProduct={props.currentProduct} currentStyle={props.currentStyle.results} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} styleName={styleName} setStyleName={setStyleName} />

      < ShareOnline />

      {/* < AddToBag currentProduct={props.currentProduct} currentStyle={props.currentStyle} /> */}
    </div>
  </div>
  )
};

export default Overview;

