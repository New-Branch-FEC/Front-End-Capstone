import React from "react";
import axios from 'axios';
import ReactDOM from 'react-DOM';

//components
import QuestionsAndAnswers from "./components/Questions-and-answers/Questions-and-answers.jsx";
import Overview from "./components/Overview/Overview.jsx";
import RatingsAndReviews from "./components/Ratings-and-reviews/Ratings-and-reviews.jsx";
import RelatedItemsAndComparisons from "./components/Related-items-and-comparisons/Related-items-and-comparisons.jsx";


const App = () => {

  const [currentProductID, setCurrentProductID] = useState([37312]);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${currentProductID}`)
    .then((res) => {
      console.log('res.data', res.data);
      setCurrentProduct(res.data)
    })
  }, []);

   return (
     <>
     <div>Hello, World!</div>
     <Overview />
     </>
   )
};

export default App;