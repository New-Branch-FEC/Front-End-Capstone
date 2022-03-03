import React, { useState, useEffect } from 'react';

const SelectStyle = (props) => {

  return (
    <div className='Style-Parent'>
      <div className='OV-Style-Name'>Style: '{props.styleName}'</div>
      {props.currentStyle.results.map((style, index) => (
        <img className='OV-Styles' key={index} src={style.photos[0].thumbnail_url} onClick={() => props.handleStyle(style)} ></img>
      ))
    }
    </div>
  )
}
export default SelectStyle;