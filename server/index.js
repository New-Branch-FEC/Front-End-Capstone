const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const {token} = require("../config.js");
const axios = require("axios");

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("dist"));


app.get('/products/:product_id', (req, res) => {
   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.product_id}`, {
      headers: {
         'Authorization': `${token}`
      }
   })
   .then(result => {
      res.send(result.data);
   })
   .catch(error => {
      res.status(500).send(error);
   })
})


// TODO: app.get('/products/reviews/:product_id') => https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=37312