import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

//components
import QuestionsAndAnswers from "./components/Questions-and-answers/Questions-and-answers.jsx";
import Overview from "./components/Overview/Overview.jsx";
import RatingsAndReviews from "./components/Ratings-and-reviews/Ratings-and-reviews.jsx";
import RelatedItemsAndComparisons from "./components/Related-items-and-comparisons/RelatedItemsAndComparisons.jsx";

const App = () => {

  const [currentProductID, setCurrentProductID] = useState(37312);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    axios.get(`/products/${currentProductID}`)
    .then((res) => {
      console.log('res: ', res);
      setCurrentProduct(res.data)
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

   return (
     <>
     <div>Hello, World!</div>
     {/* <Overview /> */}
     <RelatedItemsAndComparisons />
     {/* <QuestionsAndAnswers />
     <RatingsAndReviews /> */}

     </>
   )
};

export default App;