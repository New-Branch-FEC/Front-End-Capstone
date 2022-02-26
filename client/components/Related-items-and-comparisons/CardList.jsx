import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

import Card from './Card.jsx';

let index = 0; // will store the index upon each click

const CardList = (props) => {

  // GET /products/:product_id/related <- (this returned value is an array that must be iterated over with .map)
  // const [visibleRelatedProducts, setVisibleRelatedProducts] = useState(props.relatedProducts);
  const [index, setIndex] = useState(0);

  const handleScrollArrow = (direction) => {
    if (direction === "left") {
      setIndex(index - 1)

      // if (index === 0) {
      //   setVisibleRelatedProducts([props.relatedProducts[0], props.relatedProducts[1], props.relatedProducts[2], props.relatedProducts[3]])
      // } else if (index === 1 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[1], props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4]])
      // } else if (index === 2 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4], props.relatedProducts[5]])
      // } else if (index === 3 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[3], props.relatedProducts[4], props.relatedProducts[5], props.relatedProducts[6]])
      // } else if (index === 4 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[4], props.relatedProducts[5], props.relatedProducts[6], props.relatedProducts[7]])
      // } else if (index === 5 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[5], props.relatedProducts[6], props.relatedProducts[7], props.relatedProducts[8]])
      // } else if (index === 6 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[6], props.relatedProducts[7], props.relatedProducts[8], props.relatedProducts[9]])
      // } else if (index === 7 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[7], props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4]])
      // } else if (index === 8 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[8], props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4]])
      // } else if (index === 9 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[9], props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4]])
      // } else if (index < 0) {
      //   setVisibleRelatedProducts([props.relatedProducts[0], props.relatedProducts[1], props.relatedProducts[2], props.relatedProducts[3]])
      // }


      // let array = props.relatedProducts
      // setVisibleRelatedProducts(array.slice(index, 4))
      // if (index > 4) {
      //   setVisibleRelatedProducts([props.relatedProducts[index], props.relatedProducts[index - 1], props.relatedProducts[index - 2], props.relatedProducts[index - 3]]);
      // } else {
      //   setVisibleRelatedProducts([props.relatedProducts[1 - index], props.relatedProducts[2 - index], props.relatedProducts[3 - index], props.relatedProducts[4 - index]])
      // }

    } else if (direction === "right") {
      setIndex(index + 1)

      // if (index === 0) {
      //   setVisibleRelatedProducts([props.relatedProducts[0], props.relatedProducts[1], props.relatedProducts[2], props.relatedProducts[3]])
      // } else if (index === 1 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[1], props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4]])
      // } else if (index === 2 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4], props.relatedProducts[5]])
      // } else if (index === 3 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[3], props.relatedProducts[4], props.relatedProducts[5], props.relatedProducts[6]])
      // } else if (index === 4 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[4], props.relatedProducts[5], props.relatedProducts[6], props.relatedProducts[7]])
      // } else if (index === 5 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[5], props.relatedProducts[6], props.relatedProducts[7], props.relatedProducts[8]])
      // } else if (index === 6 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[6], props.relatedProducts[7], props.relatedProducts[8], props.relatedProducts[9]])
      // } else if (index === 7 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[7], props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4]])
      // } else if (index === 8 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[8], props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4]])
      // } else if (index === 9 && index < props.relatedProducts.length - 3 ) {
      //   setVisibleRelatedProducts([props.relatedProducts[9], props.relatedProducts[2], props.relatedProducts[3], props.relatedProducts[4]])
      // } else {
      //   "something is wrong with index"
      // }

      // let array = props.relatedProducts
      // setVisibleRelatedProducts(array.slice(index, 4))
      // setVisibleRelatedProducts([props.relatedProducts[index], props.relatedProducts[index + 1], props.relatedProducts[index + 2], props.relatedProducts[index + 3]]);
    }
  }

  // useEffect(() => {
  //   console.log("useEffect is firing" , index)
  //   handleScrollArrow(direction);
  // }, [visibleRelatedProducts])

  // useEffect(() => {
  //   setIndex(0);
  // }, [props.relatedProducts])



  if(props.title === "RELATED PRODUCTS") {

    const visibleRelatedProducts = props.relatedProducts.slice(index, index + 4);

    return (
      <div className="card-list">
      <h2>{props.title}</h2>
      <div>
      <img className="fade-out" src="http://localhost:3000/assets/fadeOut.png"/>
        {index > 0 && <img className="left-scroll-arrow" src="http://localhost:3000/assets/leftArrow.png"  onClick={() => { handleScrollArrow('left')} } /> }
        {visibleRelatedProducts.map((relatedProductID) => (
          <Card relatedProductID={relatedProductID} key={relatedProductID} currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} relatedProducts={props.relatedProducts} title={props.title} setCurrentProductID={props.setCurrentProductID} showModal={props.showModal} setCardProductFeatures={props.setCardProductFeatures} />
          ))}
        </div>
        {index + 4 < props.relatedProducts.length && <img className="right-scroll-arrow" src="http://localhost:3000/assets/rightArrow.png" onClick={() => { handleScrollArrow('right')} } />}
        <img className="fade-out" src="http://localhost:3000/assets/fadeOut.png"/>
      </div>
    )
  } else if (props.title === "YOUR OUTFIT") {
    return (
      <div className="card-list">
      <h2>{props.title}</h2>
      {props.outfit.map((outfitID) => (
        <Card outfitID={outfitID} key={outfitID} currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} setOutfit={props.setOutfit} relatedProducts={props.relatedProducts} title={props.title} setCurrentProductID={props.setCurrentProductID}/>
      ))}
      </div>
    )
  }
}

export default CardList;



// the original that was working!
  // return (
  //   <div className="card-list">
  //   <h2>{props.title}</h2>
  //   {props.relatedProducts.map((relatedProductID, index) => (
  //     <Card relatedProductID={relatedProductID} index={index} currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} relatedProducts={props.relatedProducts} title={props.title} setCurrentProductID={props.setCurrentProductID}/>
  //   ))}
  //   </div>
  // )

// this is the code prior to heavy changes to logic in handleClick
// return (
//   <div className="card-list">
//   <h2>{props.title}</h2>
//   <div>
//   <img className="fade-out" src="http://localhost:3000/assets/fadeOut.png"/>
//     {startingIndex > 0 && <img className="left-scroll-arrow" src="http://localhost:3000/assets/leftArrow.png"  onClick={() => { handleScrollArrow('left'); props.setRelatedProducts()} } /> }
//     {props.relatedProducts.slice(startingIndex, startingIndex + 4).map((relatedProductID, index) => (
//       <Card relatedProductID={relatedProductID} key={index} currentProduct={props.currentProduct} reviews={props.reviews} outfit={props.outfit} relatedProducts={props.relatedProducts} title={props.title} setCurrentProductID={props.setCurrentProductID} showModal={props.showModal} setCardProductFeatures={props.setCardProductFeatures} />
//       ))}
//     </div>
//     {startingIndex + 4 < relatedProductsArr.length && <img className="right-scroll-arrow" src="http://localhost:3000/assets/rightArrow.png" onClick={() => { handleScrollArrow('right')} } />}
//     <img className="fade-out" src="http://localhost:3000/assets/fadeOut.png"/>
//   </div>
// )






////// using .slice (before filter refactor)
// const handleScrollArrow = (direction) => {

//   if (direction === "left") {
//     setStartingIndex(startingIndex - 1)
//     //let props.relatedProducts = props.relatedProducts;


//     //using .slice method, which does change the array
//     let visibleCards = props.relatedProducts.slice(startingIndex, startingIndex + 4)
//     console.log("visibleCards variable in the handleScrollArrow function", visibleCards)
//     props.setRelatedProducts(visibleCards)
//     // results from console:
//       //first, clicking blue suede shoes to get more cards (which are not hidden correctly on DOM). then right arrow click, which consoles:
//         // visibleCards variable in the handleScrollArrow function (4) [37311, 37312, 37313, 37314] CORRECT, does hide extra cards
//         // related products from right arrow click                    (9) [37311, 37312, 37313, 37314, 37315, 37316, 37317, 37318, 37319] CORRECT, this is total related cards for blue sude shoes

//       // but clicking left hand arrow:
//          //  visibleCards variable in the handleScrollArrow function    (3) [37312, 37313, 37314] INCORRECT- lost 37315
//          // related products from left arrow click                      (4) [37311, 37312, 37313, 37314] INCORRECT, should be unchanged, and now left arrow is gone




//     //decrement through card array
//     // if (card array index is 0) toggle arrow to "HIDE" (this is handled in the div itself using the inline conditional &&)
//   } else if (direction === "right") {
//     setStartingIndex(startingIndex + 1)
//     let visibleCards = props.relatedProducts.slice(startingIndex, startingIndex + 4)
//     console.log("visibleCards variable in the handleScrollArrow function", visibleCards)
//     props.setRelatedProducts(visibleCards)
//     //increment through card array
//     // if (card array index is its length -1, toggle arrow to "HIDE" (this is handled in the div itself using the inline conditional &&)
//   }
// }