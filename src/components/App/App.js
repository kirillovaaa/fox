import React from "react";
import Header from "../Header/Header";
import Functional from "../Functional/Functional";
import Calc from "../Calc/Calc";
import Feedback from "../Feedback/Feedback";
import Reviews from "../Reviews/Reviews";

const App = () => {
  return (
    <main>
      <Header />
      <Functional />
      <Calc />
      <Feedback />
      <Reviews />
    </main>
  );
};

export default App;
