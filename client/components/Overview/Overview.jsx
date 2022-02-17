import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios')

const Overview = (props) => {

  axios.get('', (req, res) => {})
  .then(res => {
    console.log(res);
  })
  .catch(error => {
      console.log('i cannot believe this', error);
  })

  return (
  <div>
  <h1>this will be the title </h1>
  </div>
  )
};

export default Overview;