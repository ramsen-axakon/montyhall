import React from "react";
import dollar from "../assets/img/dollar.png";

export default function Box({
  isRevealed,
  hasMoney,
  isPicked,
  disabled,
  children,
  onClick,
}) {
  let style;

  if (!isRevealed) {
    style = { opacity: "1" };
  }

  if (isRevealed) {
    style = { opacity: "0.2" };
  }
  if (isPicked) {
    style = { border: "12px solid white" };
  }

  if (isRevealed && hasMoney) {
    style = {
      backgroundColor: "#92bb92",
      backgroundImage: `url(${dollar})`,
      backgroundRepeat: "repeat",
    };
  }

  return (
    <button className="box" style={style} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
    </button>
  );
}
