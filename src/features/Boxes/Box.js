import React from "react";
import { DISPLAY_RESULT } from "../../constants";
import dollar from "../../assets/img/dollar.png";

import "./Box.css";

export default function Box({ callBack, data, step }) {
  const { id, isReveleadByHost, money, pickedBox } = data;
  const displayValueOfBox = isReveleadByHost || step === DISPLAY_RESULT;
  const valueOfBox = (
    <div
      className="background"
      style={
        money
          ? { backgroundColor: "#92bb92", backgroundImage: `url(${dollar})` }
          : { backgroundColor: "rgb(255, 115, 115)" }
      }
    ></div>
  );

  const isPickedValue = pickedBox ? <span>?</span> : <span>{id + 1}</span>;

  return (
    <button
      onClick={() => callBack(data)}
      className="box"
      disabled={isReveleadByHost || pickedBox || step === DISPLAY_RESULT}
      style={isReveleadByHost ? { opacity: "0.2" } : { opacity: "1" }}
    >
      {displayValueOfBox ? valueOfBox : isPickedValue}
    </button>
  );
}
