import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

import ProductInformation from './Product-information.jsx';
import SelectStyle from './Style-selector.jsx';
import ShareOnline from './Share-to-socials.jsx'

const Overview = (props) => {
  return (
  <div>
    <div>
      < ProductInformation currentProduct={props.currentProduct} currentStyle={props.currentStyle} reviews={props.reviews}/>
      < SelectStyle currentProduct={props.currentProduct} currentStyle={props.currentStyle}/>
      < ShareOnline />
    </div>
  </div>
  )
};

export default Overview;

