import React from "react";
import { DISPLAY_RESULT } from "../../constants";
import dollar from "../../assets/img/dollar.png";

import "./Box.css";

export default function Box({ callBack, data, step }) {
  const { id, isRevealedByHost, money, pickedBox } = data;
  const displayValueOfBox = isRevealedByHost || step === DISPLAY_RESULT;
  const valueOfBox = (
    <div
      className="background"
      style={
        money
          ? {
              backgroundColor: "#92bb92",
              backgroundImage: `url(${dollar})`,
              backgroundRepeat: "repeat",
            }
          : { backgroundColor: "rgb(255, 115, 115)" }
      }
    ></div>
  );

  const isPickedValue = pickedBox ? <span>?</span> : <span>{id + 1}</span>;

  return (
    <button
      onClick={() => callBack(data)}
      className="box"
      disabled={isRevealedByHost || pickedBox || step === DISPLAY_RESULT}
      style={isRevealedByHost ? { opacity: "0.2" } : { opacity: "1" }}
    >
      {displayValueOfBox ? valueOfBox : isPickedValue}
    </button>
  );
}
