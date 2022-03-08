const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const { token } = require("../config.js");
const axios = require("axios");
const compression = require("compression");

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(compression({ level: 9 }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("dist"));

// return product at endpoint id
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

// return product's related product array at endpoint id's 'related content'
app.get('/products/:product_id/related', (req, res) => {
   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.product_id}/related`, {
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

// return all of product's reviews at the endpoint id
app.get('/reviews', (req, res) => {
   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${req.query.product_id}`, {
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

app.get('/reviews/meta', (req, res) => {
   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${req.query.product_id}`, {
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

app.get('/products/:product_id/styles', (req, res) => {
   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.params.product_id}/styles/`, {
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
