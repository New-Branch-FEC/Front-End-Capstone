import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

import Card from './Card.jsx';

const CardList = (props) => {

  // GET /products/:product_id/related <- endpoint
  // the below is carousel scroll functionality'
  // This is added to ensure the commit

  const [index, setIndex] = useState(0);

  const handleScrollArrow = (direction) => {
    if (direction === "left") {
      setIndex(index - 1)
    } else if (direction === "right") {
      setIndex(index + 1)
    }
  }

  if(props.title === "RELATED PRODUCTS") {
    // this ensures that only four cards are visible on the carousel at a time
    const visibleRelatedProducts = props.relatedProducts.slice(index, index + 4);


    // the arrows only increment and decrement the index. Both are set to render under specific circumstances related to index (where the && operator wraps it and renders if the first statement is true -->[ {index > 0 && ])
    return (
      <div className="card-list">
        <img className="embellishment" alt="embellishment" src="http://localhost:3000/assets/sectionEmbellishmentClean.png"></img>
        <h1>{props.title}</h1>
        <div>
        {index > 0 && <img className="left-fade-out" alt="left fade out" src="http://localhost:3000/assets/fadeOut.png"/>}
          {index > 0 && <img className="left-scroll-arrow" alt="left scroll arrow" src="http://localhost:3000/assets/leftArrow.png"  onClick={() => { handleScrollArrow('left')} } /> }
          {visibleRelatedProducts.map((relatedProductID) => (
            <Card relatedProductID={relatedProductID} key={relatedProductID} currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} relatedProducts={props.relatedProducts} title={props.title} setCurrentProductID={props.setCurrentProductID} showModal={props.showModal} setCardProductFeatures={props.setCardProductFeatures} />
            ))}
          </div>
          {index + 4 < props.relatedProducts.length && <img className="right-scroll-arrow" alt="right scroll arrow" src="http://localhost:3000/assets/rightArrow.png" onClick={() => { handleScrollArrow('right')} } />}
          {index + 4 < props.relatedProducts.length && <img className="fade-out" alt="fade out" src="http://localhost:3000/assets/fadeOut.png"/>}
      </div>
    )
  } else if (props.title === "YOUR OUTFIT") {
    return (
      <div className="card-list">
        <img className="embellishment" alt="embellishment" src="http://localhost:3000/assets/sectionEmbellishmentClean.png"></img>
        <h1>{props.title}</h1>
        {props.outfit.map((outfitID) => (
          <Card outfitID={outfitID} key={outfitID} currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} setOutfit={props.setOutfit} relatedProducts={props.relatedProducts} title={props.title} setCurrentProductID={props.setCurrentProductID}/>
        ))}
      </div>
    )
  }
}

export default CardList;