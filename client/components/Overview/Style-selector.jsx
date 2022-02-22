import React, { useState, useEffect } from 'react';
const axios = require('axios');


const SelectStyle = (props) => {

  const[style, setStyle] = useState(props.currentStyle);
  const styleArray = props.currentStyle.results;
  console.log('CHANGE OF PLAN', props.currentStyle);

  styleArray.forEach(style => {
    console.log(style.photos)
  })

  return (
    <div>
      <img className='OV-Style-Selector' src=''/>
      <div className='OV-Selected-Style'></div>
    </div>
  )
}

export default SelectStyle;



// this should be in our return statement


// use postman to access styles endpoint, which gives you thumbnail full url
// put the short endpoint from Atelier API docs in the client, the long ones are in the server