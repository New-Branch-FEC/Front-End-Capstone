import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

import ProductInformation from './Product-Information.jsx';
import SelectStyle from './Style-selector.jsx';
import ShareOnline from './Share-to-socials.jsx'

const Overview = (props) => {

  return (
  <div>
    <h1>
    <ProductInformation />
    </h1>
    <div>
      < SelectStyle />
      < ShareOnline />
    </div>
  </div>
  )
};

export default Overview;



  // axios.get('', (req, res) => {})
  // .then(res => {
  //   console.log(res);
  // })
  // .catch(error => {
  //     console.log('i cannot believe this', error);
  // })
