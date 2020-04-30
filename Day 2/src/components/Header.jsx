import React from "react";
import "../css/Header.css";

function Header(props) {
  return (
    <div className="header-content">
      <h1>{props.header}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Header;
