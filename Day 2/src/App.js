import React from "react";
import BackButton from "./components/BackButton";
import Header from "./components/Header";
import CircleGreen from "./components/CircleSuccess";
import CircleFail from "./components/CircleFail";
import Password from "./components/Password";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.CircleElement = React.createRef();
    this.state = { status: "" };
  }
  render() {
    let { status } = this.state;
    return (
      <div className="page-content">
        <BackButton></BackButton>
        <div className="main-content">
          <Header
            header="Waiting for OTP"
            text="Interactively expedite revolutionary ROI after bricks-and-clicks alignments."
          ></Header>
          <Password
            onSubmit={(state) => {
              this.setState({ status: state.status });
            }}
          >
            {console.log(status)}
            {status === "success" && <CircleGreen></CircleGreen>}
            {status === "fail" && <CircleFail></CircleFail>}
          </Password>
        </div>
      </div>
    );
  }
}

export default App;
