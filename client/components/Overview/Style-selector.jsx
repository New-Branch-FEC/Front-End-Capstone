import React, { useState, useEffect } from 'react';

const SelectStyle = (props) => {

  // create an object that has all of the styles for the particular product
  const stylesArray = [];


  for (let i = 0; i < props.currentStyle.length; i++) {
    let current = props.currentStyle[i];
    stylesArray.push(current);
  }

  // iterate over currentStyles to get each photo for styles
    // props.currentStyle[index].photos[0].thumbnail_url


  // add cumulative stars from terri's component (<Stars REVIEWS={props.reviews} />)
  return (
    <div>
      <div className='OV-Style-Name'>Style: '{props.styleName}'</div>
      {stylesArray.map((style, index) => (
        <img className='OV-Styles' key={index} src={style.photos[0].thumbnail_url} onClick={() => props.handleStyle(style)} ></img>
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