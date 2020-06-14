import React from "react";
import montyImages from "./utils/montyImages";
import { getRandomMonty } from "./utils/getRandomHelper";
import Message from "./features/Message/Message";
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
        <Message />
        <Boxes />
        <Statistics />
      </div>
    </div>
  );
}

export default App;
