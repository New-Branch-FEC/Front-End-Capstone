import React, {useState, useEffect, useContext} from 'react';


const SelectStyle = () => (
    <div>
      <div className='OV-Style-Selector'>thumbnails</div>
      <div className='OV-Selected-Style'>this one must look different</div>
    </div>
)

export default SelectStyle;

// use postman to access styles endpoint, which gives you thumbnail full url
// put the short endpoint from Atelier API docs in the client, the long ones are in the server