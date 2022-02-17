import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

import Stars from './Stars.jsx';
import Comparison from './Comparison.jsx';


const Card = () => {

  //if(props.title === "RELATED PRODUCTS")


  return (
    <>

    <div class="card">
      <div class="container">
        <div>CATEGORY</div>
        <div>Expanded Product Name with Extra Text</div>
        <div>$123</div>
        <div> ☆ ☆ ☆ ☆ ☆</div>
      </div>
    </div>
    </>
  )

}

export default Card;