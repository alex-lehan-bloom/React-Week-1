import React from "react";
import Toggle from "./components/Toggle";
import CheckBox from "./components/CheckBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { presentAlert: false };
  }

  render() {
    return (
      <div>
        <h1>Checkbox Website</h1>
        <CheckBox></CheckBox>
      </div>
    );
  }
  //   render() {
  //       let {alert} = this.state;
  //     return (<Mount></Mount>
  //         {alert && <Alert></Alert>});
  //   }
}

export default App;
