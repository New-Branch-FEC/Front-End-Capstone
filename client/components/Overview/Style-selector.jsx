import React, { useState, useEffect } from 'react';

const SelectStyle = (props) => {

  // create an object that has all of the styles for the particular product
  const stylesArray = [];
  // console.log('STYLE INFO', props.currentStyle)

  for (let i = 0; i < props.currentStyle.length; i++) {
    let current = props.currentStyle[i];
    stylesArray.push(current);
  }

  // iterate over currentStyles to get each photo for styles
    // props.currentStyle[index].photos[0].thumbnail_url

  return (
    <div>
      {stylesArray.map((style, index) => (
        <img key={index} src={style.photos[0].thumbnail_url} onClick={() => props.handleStyle(style)} ></img>
      ))
    }
      {/* map all photos the same way as the other thumbnails */}
    </div>
  )
}
// Get the main photo to render correctly > get the thumbnails to render correctly > get styles to render correctly > get the size and quantity render correctly

export default SelectStyle;


// use postman to access styles endpoint, which gives you thumbnail full url
// put the short endpoint from Atelier API docs in the client, the long ones are in the server