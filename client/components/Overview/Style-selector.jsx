import React, { useState, useEffect } from 'react';
const axios = require('axios');


const SelectStyle = (props) => {

  const[style, setStyle] = useState(props.currentStyle);

  // useEffect(() => {
  //   axios.get(`/products/:product_id/${props.currentStyle}`)
  //   .then((res) => {
  //     setStyle(res.data);
  //   })
  //   .catch((err) => {
  //     console.log('something went wrong while finding style', err)
  //   })
  // })

  return (
    <div>
      <img className='OV-Style-Selector' src='https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'/>
      <div className='OV-Selected-Style'>{props.currentStyle.results[0].name}</div>
    </div>
  )
}

export default SelectStyle;



// this should be in our return statement


// use postman to access styles endpoint, which gives you thumbnail full url
// put the short endpoint from Atelier API docs in the client, the long ones are in the server