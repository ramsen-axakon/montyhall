import React from "react";

export default function Statistics({ data }) {
  const keptPercentage = ((data.keptWins / data.playedRounds) * 100).toFixed(1);
  const switchPercentage = (
    (data.switchedWins / data.playedRounds) *
    100
  ).toFixed(1);

  return (
    <div className="statistics">
      <div>Keep</div>

      <div className="statistics-row">
        <div className="statistics-data">
          <b>Count:</b>
          {` ${data.playedRounds}`}
        </div>

        <div className="statistics-data">
          <b>Odds:</b>
          {!isNaN(keptPercentage) ? ` ${keptPercentage} %` : " 0 %"}
        </div>
      </div>

      <div className="separator" />

      <div>Switch</div>

      <div className="statistics-row">
        <div className="statistics-data">
          <b>Count:</b>
          {` ${data.playedRounds}`}
        </div>

        <div className="statistics-data">
          <b>Odds:</b>
          {!isNaN(switchPercentage) ? ` ${switchPercentage} %` : " 0 %"}
        </div>
      </div>
    </div>
  );
}
