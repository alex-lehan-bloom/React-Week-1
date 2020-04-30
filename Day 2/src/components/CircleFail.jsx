import React from "react";
import "../css/Circle.css";

function CircleFail() {
  return (
    <div className="loader-block">
      <div className="circle-red"></div>
      <p className="loader-text x">Fail</p>
    </div>
  );
}

export default CircleFail;
