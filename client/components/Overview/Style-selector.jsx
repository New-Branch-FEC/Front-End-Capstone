import React, { useState, useEffect } from 'react';
const axios = require('axios');


const SelectStyle = (props) => {
  console.log('PROPS IN STYLE', props.smallPhotos);

  //populate small photos into an object so we can access them correctly
  const photosArray = [];
  props.smallPhotos.forEach(photo => {
    photosArray.push(photo.thumbnail_url);
  })


  return (
    <div>
      <img className='OV-Main-Photo' src={props.mainPhoto}/>
      <div>
        {photosArray.map((url, index) => (
          <img key={index} src={url} />
        )
        )}
      </div>
      <div className='OV-Selected-Style-Name'></div>
      <Add-to-bag />
    </div>

)
}
export default SelectStyle;


// Get the main photo to render correctly > get the thumbnails to render correctly > get styles to render correctly > get the size and quantity render correctly



// use postman to access styles endpoint, which gives you thumbnail full url
// put the short endpoint from Atelier API docs in the client, the long ones are in the server