import React from "react";

class Mount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alert: "" };
  }

  componentDidMount() {
    console.log("Mount.");
    this.setState({ alert: "I'm alive!" });
  }

  render() {
    console.log("Render.");
    let { alert } = this.state;
    return (
      <div>
        <h1>A NEW WEBPAGE</h1>
        <p>{alert}</p>
      </div>
    );
  }
}

export default Mount;
