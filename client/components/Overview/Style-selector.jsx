import React, {useState, useEffect, useContext} from 'react';


const SelectStyle = (props) => (
    <div>
      <img className='OV-Style-Selector' src='https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'/>
      <div className='OV-Selected-Style'>{props.currentStyle.results[0].name}</div>
    </div>
)

export default SelectStyle;

// use postman to access styles endpoint, which gives you thumbnail full url
// put the short endpoint from Atelier API docs in the client, the long ones are in the server