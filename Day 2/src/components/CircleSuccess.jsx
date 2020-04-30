import React from "react";
import "../css/Circle.css";

class CircleGreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      circle_class: "circle-green",
      inside: "\u2713",
      inside_class: " loader-text checkmark",
    };
  }

  render() {
    return (
      <div className="loader-block">
        <div className="circle-green"></div>
        <p className="loader-text checkmark">Yes</p>
      </div>
    );
  }
}

export default CircleGreen;
