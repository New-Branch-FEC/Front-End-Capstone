import React, { useState, useEffect }from 'react';

const SelectThumb = (props) => {
  const photosObject = {};

  props.currentStyle.forEach(style => {
    photosObject[style.name] = style.photos;
  })

    const photosArray = [];
    const allStyles = Object.keys(photosObject);

    for (let i = 0; i < allStyles.length; i++) {
      let currentArray = allStyles[i];
      photosArray.push(photosObject[currentArray]);
    }

    return (
      <div className='Photo-Parent'>
        <img className='OV-Main-Photo' src={props.mainPhoto}/>
        <div className='Thumb-Parent'>
          {photosArray[0].map((url, index) => (
            <img className='OV-Thumbnails' key={index} src={url.thumbnail_url} onClick={() => {props.handleThumb(url)}}/>
            )
          )}
        </div>
      </div>
  )
}
export default SelectThumb;
