import React from "react";
// import './App.css';
import Timer from "./components/yonatan/Timer";
import MyForm from "./components/yonatan/MyForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldPresentTimer: true,
    };
  }
  render() {
    const { shouldPresentTimer } = this.state;
    return (
      <div>
        <MyForm
          onFormSubmit={(values) => {
            this.setState({ shouldPresentTimer: values.age < 10 });
          }}
        ></MyForm>
        {shouldPresentTimer && <Timer></Timer>}
      </div>
    );
  }
}

export default App;
