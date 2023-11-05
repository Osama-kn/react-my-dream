import React from "react";
import "./info.css";

const Info = () => {
  return (
    <>
      <h3 className="info-title">{"Votre Shynleï c'est .."}</h3>
      <div className="info-steps">
        {
          "7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 3 interprétations pour vous aider .."
        }
      </div>
    </>
  );
};

export default Info;
