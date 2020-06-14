import React from "react";
import montyImages from "./utils/montyImages";
import { getRandomMonty } from "./utils/getRandomHelper";
import Boxes from "./features/Boxes/Boxes";
import Statistics from "./features/Statistics/Statistics";

import "./App.css";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${montyImages[getRandomMonty]})`,
      }}
    >
      <div className="container">
        <Boxes />
        <Statistics />
      </div>
    </div>
  );
}

export default App;
