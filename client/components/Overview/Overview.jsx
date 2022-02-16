import React from 'react';
// import {receiveProducts} from '../../index.js'; <-- move this

const Overview = () => {
  return <div> This is from Overview's Component!
    {receiveProducts(() => {
      console.log('it works!');
    }) }

  </div>
};

export default Overview;