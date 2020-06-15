import React from "react";

export default function Message({ text }) {
  return (
    <div className="message">
      {text}
      <span className="message-bubble"></span>
    </div>
  );
}
