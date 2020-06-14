import React from "react";
import { useSelector } from "react-redux";
import { getSwitchedStatistics, getKeptStatistics } from "../../selectors";

import "./Statistics.css";

export default function Statistics() {
  const keptStatistics = useSelector(({ app }) => getKeptStatistics(app));
  const switchedStatistics = useSelector(({ app }) =>
    getSwitchedStatistics(app)
  );
  return (
    <div className="statistics">
      <div>Keep</div>
      <div className="statistics-row">
        <div className="statistics-data">
          <b>Count:</b>
          {` ${keptStatistics.count}`}
        </div>
        <div className="statistics-data">
          <b>Odds:</b>
          {` ${keptStatistics.percentage} %`}
        </div>
      </div>

      <div className="separator" />

      <div>Switch</div>
      <div className="statistics-row">
        <div className="statistics-data">
          <b>Count:</b>
          {` ${switchedStatistics.count}`}
        </div>
        <div className="statistics-data">
          <b>Odds:</b>
          {` ${switchedStatistics.percentage} %`}
        </div>
      </div>
    </div>
  );
}
