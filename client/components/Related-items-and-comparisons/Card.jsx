import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

import Stars from './Stars.jsx';
import Comparison from './Comparison.jsx';


const Card = (props) => {

  if (props.relatedProductID !== undefined) {

    // to render related products array
    const [cardProduct, setCardProduct] = useState(null);

    useEffect(() => {
      let cardObject = {};
      axios.get(`/products/${props.relatedProductID}`)
        .then((res) => {
          cardObject.id = res.data.id;
          cardObject.category = res.data.category;
          cardObject.name = res.data.name;
          cardObject.altTag = res.data.name;
          cardObject.default_price = res.data.default_price;
          cardObject.fullProductObj = res.data
          return axios.get(`/products/${props.relatedProductID}/styles`)
        })
        .then((res) => {
          cardObject.image = res.data.results[0].photos[0].url
          if (cardObject.id === 37312) {
            cardObject.image = "http://localhost:3000/assets/modelChi.png"
          }
          return axios.get(`/reviews?product_id=${props.relatedProductID}`)
        })
        .then((res) => {
          cardObject.reviews = res.data;
          setCardProduct(cardObject)
        })
        .catch(err => {
          console.log("An error occured while fetching current item", err);
        });
    }, []);

    if (cardProduct === null) {
      return <div>Loading Related Products</div>
    }

    return (

      <div className="card">
        <div>
          <img className="comparison-button" alt="comparison button" src="http://localhost:3000/assets/clickStar.png" onClick={() => { props.showModal(true), props.setCardProductFeatures(cardProduct.fullProductObj) }} />
        </div>

        <div alt="product main image" className="clickable-img" onClick={() => { props.setCurrentProductID(cardProduct.id) }}>
          <img src={cardProduct.image} />
        </div>
        <div className="container">
          <div>{cardProduct.category}</div>
          <div>{cardProduct.name}</div>
          <div>{`$${cardProduct.default_price}`}</div>
          <Stars reviews={cardProduct.reviews} />
        </div>
      </div>
    )

  } else if (props.title === "YOUR OUTFIT") {

    //to render outfit array:
    const [cardOutfitProduct, setCardOutfitProduct] = useState(null);

    const removeOutfit = (selectedOutfitID) => {
      let updatedOutfit = props.outfit.filter((itemID) => {
        return itemID !== selectedOutfitID;
      })
      props.setOutfit(updatedOutfit);
    }

    useEffect(() => {
      let cardOutfitObject = {};
      axios.get(`/products/${props.outfitID}`)
        .then((res) => {
          cardOutfitObject.id = res.data.id
          cardOutfitObject.name = res.data.name;
          cardOutfitObject.altTag = res.data.name;
          cardOutfitObject.default_price = res.data.default_price;
          return axios.get(`/products/${props.outfitID}/styles`)
        })
        .then((res) => {
          cardOutfitObject.image = res.data.results[0].photos[0].url
          return axios.get(`/reviews?product_id=${props.outfitID}`)
        })
        .then((res) => {
          cardOutfitObject.reviews = res.data;
          setCardOutfitProduct(cardOutfitObject)

        })
        .catch(err => {
          console.log("An error occured while fetching current item", err);
        });
    }, []);

    if (cardOutfitProduct === null) {
      return <div>Loading Outfits</div>
    }
    return (
      <div className="card">
        <img className="comparison-button" alt="delete button" src="http://localhost:3000/assets/deleteButton.png" onClick={() => removeOutfit(cardOutfitProduct.id)} />
        <div className="clickable-img" alt={`${cardOutfitProduct.altTag}`} onClick={() => { props.setCurrentProductID(cardOutfitProduct.id) }}>
          <img src={cardOutfitProduct.image} />
        </div>
        <div className="container">
          <div>CATEGORY</div>
          <div>{cardOutfitProduct.name}</div>
          <div>{`$${cardOutfitProduct.default_price}`}</div>
          <Stars reviews={cardOutfitProduct.reviews} />
        </div>
      </div>
    )

  }
}

export default Card;
