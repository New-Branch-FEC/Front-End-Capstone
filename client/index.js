import React from "react";
import ReactDOM from "react-dom";
import {token} from "../config.js";
const axios = require("axios");


import App from "./App.js";
import "../styles.css";


const receiveProducts = () => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {
    headers: {
      'Authorization': token
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })
}

ReactDOM.render(<App />, document.getElementById("root"));

export {receiveProducts};