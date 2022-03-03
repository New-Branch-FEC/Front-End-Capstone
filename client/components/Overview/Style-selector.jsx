import React, { useState, useEffect } from 'react';

const SelectStyle = (props) => {

  const stylesArray = [];

  for (let i = 0; i < props.currentStyle.results.length; i++) {
    let current = props.currentStyle.results[i];
    stylesArray.push(current);
  }
  // console.log('stylesArray', stylesArray)

  return (
    <div className='Style-Parent'>
      <div className='OV-Style-Name'>Style: '{props.styleName}'</div>
      {stylesArray.map((style, index) => (
        <img className='OV-Styles' key={index} src={style.photos[0].thumbnail_url} onClick={() => props.handleStyle(style)} ></img>
      ))
    }
    </div>
  )
}
export default SelectStyle;