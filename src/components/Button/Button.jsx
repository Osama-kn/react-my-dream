import React from "react";
import "./Button.css";

function Button({ type, text, onClick, disabled = false }) {
  return (
    <button
      type={type}
      className="express-button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
