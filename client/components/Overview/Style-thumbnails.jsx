import React, { useState, useEffect }from 'react';

const SelectStyle = (props) => {
  //populate small photos into an object so we can access them correctly
  const stylesObject = {};
  const photosObject = {};
  props.currentStyle.forEach(style => {
    stylesObject[style.name] = style;
    photosObject[style.name] = style.photos;
  })
  console.log(stylesObject);

    const photosArray = [];
    const allStyles = Object.keys(photosObject);

    for (let i = 0; i < allStyles.length; i++) {
      let currentArray = allStyles[i];
      photosArray.push(photosObject[currentArray]);
    }

    return (
      <div>
        <img className='OV-Main-Photo' src={props.mainPhoto}/>
        <div>
          {photosArray[0].map((url, index) => (
            <img key={index} src={url.thumbnail_url} onClick={() => {props.handleThumb(url)}}/>
            )
          )}
        </div>
        <div className='OV-Selected-Style-Name'></div>
        <Add-to-bag stylesObject={stylesObject} />
      </div>
  )
}
export default SelectStyle;
