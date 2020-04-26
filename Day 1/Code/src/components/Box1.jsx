import React from "react";
import BoxTwo from "./Box2";

class BoxOne extends React.Component {
  render() {
    return (
      <div className="box-1">
        <BoxTwo></BoxTwo>
      </div>
    );
  }
}

export default BoxOne;
