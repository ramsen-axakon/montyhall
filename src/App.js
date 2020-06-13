import React from "react";
import { useSelector } from "react-redux";
import { getScore } from "./selectors";
import montyImages from "./utils/montyImages";
import { getRandomMonty } from "./utils/getRandomHelper";
import Message from "./Message";
import Boxes from "./Boxes";
import Score from "./Score";

import "./App.css";

function App() {
  const score = useSelector(({ app }) => getScore(app));
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${montyImages[getRandomMonty]})`,
      }}
    >
      <Message />
      <Boxes />
      <Score data={score} />
    </div>
  );
}

export default App;
