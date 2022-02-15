import React from "react";

//components
import QuestionsAndAnswers from "./components/Questions-and-answers/Questions-and-answers.jsx";
import Overview from "./components/Overview/Overview.jsx";
import RatingsAndReviews from "./components/Ratings-and-reviews/Ratings-and-reviews.jsx";
import RelatedItemsAndComparisons from "./components/Related-items-and-comparisons/Related-items-and-comparisons.jsx";


const App = () => {
   return (
     <>
     <div>Hello, World!</div>
     <Overview />
     <RatingsAndReviews />
     </>
   )
};

export default App;