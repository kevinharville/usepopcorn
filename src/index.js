import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import { useState } from "react";
//import './index.css';
import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetRating={setMovieRating}
        defaultRating={7}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test />
    <StarRating
      messages={["Terrible", "Horrid", "Monkey", "Great", "Wheeee!"]}
    />
    <StarRating maxRating={10} size={16} color="red" className="test" />
    <StarRating maxRating={5} defaultRating={5} /> */}
  </React.StrictMode>
);
