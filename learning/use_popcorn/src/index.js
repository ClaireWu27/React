import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import "./StarRating";
// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="orange" maxRating={10} onSetRating={setMovieRating} />
//       <p>this movie is rated {movieRating} </p>
//     </div>
//   );
// }
root.render(
  <App />
  // <>
  //   <StarRating
  //     maxRating={5}
  //     message={["terrible", "bad", "okay", "good", "amazing"]}
  //   />
  //   <StarRating
  //     maxRating={10}
  //     size="24"
  //     color="pink"
  //     className="test"
  //     defaultRating={3}
  //   />
  //   <Test />
  // </>
);
