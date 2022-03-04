import React, { useState, useEffect }from 'react';

const SelectThumb = (props) => {

    return (
      <div className='Photo-Parent'>
        <img className='OV-Main-Photo' alt="main photo" src={props.mainPhoto}/>
        <div className='Thumb-Parent'>
          {props.thumbnails.map((url, index) => (
            <img className='OV-Thumbnails' alt="product thumbnail" key={index} src={url.thumbnail_url} onClick={() => {props.handleThumb(url)}}/>
            )
          )}
        </div>
      </div>
  )
}

export default SelectThumb;
