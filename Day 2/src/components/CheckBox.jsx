import React from "react";
import Message from "./Message.jsx";

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  handleCheckOrUncheck() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    let { isChecked } = this.state;
    return (
      <div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            defaultChecked={isChecked}
            onChange={() => this.handleCheckOrUncheck()}
          />
          <label className="form-check-label">
            {isChecked ? "Uncheck Me" : "Check Me"}
          </label>
        </div>
        <Message isChecked={this.state.isChecked}></Message>
      </div>
    );
  }
}

export default CheckBox;
