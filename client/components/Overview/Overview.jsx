import React from 'react';
import {receiveProducts} from '../../index.js';

const Overview = () => {
  return <div>
    miau
  {receiveProducts((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  })}
  </div>
};

export default Overview;