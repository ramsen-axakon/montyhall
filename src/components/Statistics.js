import React from "react";

export default function Statistics({ data, isLoading }) {
  const { playedRounds, keptWins, switchedWins } = data;
  const keptPercentage = ((keptWins / playedRounds) * 100).toFixed(1);
  const switchPercentage = ((switchedWins / playedRounds) * 100).toFixed(1);

  const hasStatistics =
    Number.isInteger(Math.floor(keptPercentage)) &&
    Number.isInteger(Math.floor(switchPercentage));

  return hasStatistics && !isLoading ? (
    <div className="statistics">
      <div>Keep</div>

      <div className="statistics-row">
        <div className="statistics-data">
          <b>Count:</b>
          {` ${playedRounds}`}
        </div>

        <div className="statistics-data">
          <b>Odds:</b>
          {` ${keptPercentage} %`}
        </div>
      </div>

      <div className="separator" />

      <div>Switch</div>

      <div className="statistics-row">
        <div className="statistics-data">
          <b>Count:</b>
          {` ${playedRounds}`}
        </div>

        <div className="statistics-data">
          <b>Odds:</b>
          {` ${switchPercentage} %`}
        </div>
      </div>
    </div>
  ) : null;
}
