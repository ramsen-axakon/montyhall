import React from "react";

export default function Button({
  isLoading = false,
  type = "primary",
  onClick,
  disabled,
  children,
}) {
  return (
    <button className={`button ${type}`} onClick={onClick} disabled={disabled}>
      {isLoading ? <div className="loader"></div> : children}
    </button>
  );
}
