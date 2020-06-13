import React from "react";

import "./Score.css";

export default function Score({ data }) {
  const { switched, kept } = data;
  return (
    <div className="score">
      <div>Keept box</div>
      <div className="score-row">
        <div className="score-data">
          <b>Count:</b>
          {` ${kept.count}`}
        </div>
        <div className="score-data">
          <b>Odds:</b>
          {` ${kept.percentage} %`}
        </div>
      </div>
      <div className="separator" />
      <div>Switched box</div>
      <div className="score-row">
        <div className="score-data">
          <b>Count:</b>
          {` ${switched.count}`}
        </div>
        <div className="score-data">
          <b>Odds:</b>
          {` ${switched.percentage} %`}
        </div>
      </div>
    </div>
  );
}
