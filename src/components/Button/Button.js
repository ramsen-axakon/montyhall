import React from "react";

import "./Button.css";

export default function Button({ className, onClick, text, disabled }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
