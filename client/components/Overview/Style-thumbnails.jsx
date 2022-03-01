import React, { useState, useEffect }from 'react';

const SelectThumb = (props) => {
  //populate small photos into an object so we can access them correctly
  const stylesObject = {};
  const photosObject = {};
  props.currentStyle.forEach(style => {
    stylesObject[style.name] = style;
    photosObject[style.name] = style.photos;
  })

    const photosArray = [];
    const allStyles = Object.keys(photosObject);

    for (let i = 0; i < allStyles.length; i++) {
      let currentArray = allStyles[i];
      photosArray.push(photosObject[currentArray]);
    }

    return (
      <>
        <div>
        <img className='OV-Main-Photo' src={props.mainPhoto}/>
          {photosArray[0].map((url, index) => (
            <img className='OV-Thumbnails' key={index} src={url.thumbnail_url} onClick={() => {props.handleThumb(url)}}/>
            )
          )}
        <Add-to-bag stylesObject={stylesObject} />
        </div>
      </>
  )
}
export default SelectThumb;
