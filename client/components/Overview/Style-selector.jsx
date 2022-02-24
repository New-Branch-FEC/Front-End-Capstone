import React, { useState, useEffect } from 'react';
const axios = require('axios');


const SelectStyle = (props) => {
  // console.log('PROPS IN STYLE', props.currentStyle);

  //populate small photos into an object so we can access them correctly
  const stylesObject = {};
  const photosObject = {};
  props.currentStyle.forEach(style => {
    stylesObject[style.name] = style;
    photosObject[style.name] = style.photos;
  })

  //styles object dot {stylename} dot photos

  // console.log('STYLES OBJECT', stylesObject);
  // console.log('PHOTOS OBJECT', photosObject);

    const photosArray = [];
    const allStyles = Object.keys(photosObject);

    for (let i = 0; i < allStyles.length; i++) {
      let currentArray = allStyles[i];
        if (currentArray === props.currentStyle[0].name) {
          photosArray.push(photosObject[currentArray]);
          props.setMainPhoto(photosObject[currentArray][0].url);
      }
    }


  return (
    <div>
      <img className='OV-Main-Photo' src={props.mainPhoto}/>
      <div>
        {photosArray[0].map((url, index) => (
          <img key={index} src={url.thumbnail_url} />
          )
        )}
      </div>
      <div className='OV-Selected-Style-Name'></div>
      <Add-to-bag stylesObject={stylesObject}/>
    </div>

)
}
export default SelectStyle;


// Get the main photo to render correctly > get the thumbnails to render correctly > get styles to render correctly > get the size and quantity render correctly



// use postman to access styles endpoint, which gives you thumbnail full url
// put the short endpoint from Atelier API docs in the client, the long ones are in the server