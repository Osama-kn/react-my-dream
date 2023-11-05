import React from "react";
import "./textIconBlock.css";

function TextIconBlock(prop) {
  return (
    <div className={`text-icon-block ${prop.classNames}`}>
      <img src={prop.icon} alt="Icon" />
      <p className="m-0">{prop.text}</p>
    </div>
  );
}

export default TextIconBlock;
