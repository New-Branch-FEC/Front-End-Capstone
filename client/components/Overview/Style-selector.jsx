import React, {useState, useEffect, useContext} from 'react';


const SelectStyle = (props) => (
    <div>
      <img className='OV-Style-Selector' src='https://en.wikipedia.org/wiki/Kirby_(character)#/media/File:SSU_Kirby_artwork.png'/>
      <div className='OV-Selected-Style'>{props.currentStyle.results[0].name}</div>
    </div>
)

export default SelectStyle;

// use postman to access styles endpoint, which gives you thumbnail full url
// put the short endpoint from Atelier API docs in the client, the long ones are in the server