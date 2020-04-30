import React from "react";
import OTPInput from "react-otp-input";
import { Button } from "react-bootstrap";
import "../css/password.css";

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      user_otp: "",
      password: "1234",
      button_name: "Shop",
    };
  }

  updateState() {
    this.props.onStateChange = "";
  }
  updatePassword(user_input) {
    this.setState({ user_otp: user_input });
  }
  comparePassword() {
    let { user_otp, password } = this.state;
    if (user_otp === password) {
      this.setState({ status: "success" }, () => {
        this.props.onSubmit(this.state);
      });
    } else {
      this.setState({ status: "fail" }, () => {
        this.props.onSubmit(this.state);
      });
    }
  }

  render() {
    let { button_name, user_otp } = this.state;
    return (
      <>
        <OTPInput
          className="otp"
          value={user_otp}
          onChange={(otp) => this.updatePassword(otp)}
          autoFocus
          OTPLength={4}
          otpType="string"
          disabled={true}
          secure
          separator={<span className="otp-separator"></span>}
        />
        {this.props.children}
        <Button
          className="submit-button"
          variant="primary"
          onClick={() => this.comparePassword()}
        >
          <span>{button_name}</span>
        </Button>
      </>
    );
  }
}

export default Password;
