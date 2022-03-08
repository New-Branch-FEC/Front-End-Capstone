import React, { useState, useEffect, useContext } from 'react';

const ShareOnline = () => (
  <div className='Share'>
    <button className='Share-to' onClick={() => prompt('Share your thoughts with Meta!')}> Meta </button>
    <button className='Share-to' onClick={() => prompt('Share your thoughts with Twitter!')}> Twitter </button>
    <button className='Share-to' onClick={() => prompt('Share your thoughts with Pinterest!')}> Pinterest </button>
  </div>
)

export default ShareOnline;