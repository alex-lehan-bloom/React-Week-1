import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>{props.header}</h1>
      <p className="mission-statement">{props.mission_statement}</p>
    </div>
  );
}

export default Header;
