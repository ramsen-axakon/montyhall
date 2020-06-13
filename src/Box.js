import React from "react";
import { DISPLAY_RESULT } from "./constants";

import "./Box.css";

export default function Box({ callBack, data, step }) {
  const { id, isReveleadByHost, money, pickedBox } = data;
  const displayValueOfBox = isReveleadByHost || step === DISPLAY_RESULT;
  const valueOfBox = <div className={money ? "money" : "empty"}></div>;

  return (
    <button
      onClick={() => callBack(data, step)}
      className="box"
      disabled={isReveleadByHost || pickedBox || step === DISPLAY_RESULT}
      style={isReveleadByHost ? { opacity: "0.5" } : { opacity: "1" }}
    >
      {displayValueOfBox ? (
        valueOfBox
      ) : pickedBox ? (
        <span className="circel">?</span>
      ) : (
        <span className="circel">{id + 1}</span>
      )}
    </button>
  );
}
