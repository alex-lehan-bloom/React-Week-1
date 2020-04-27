import React from "react";
import { Alert } from "react-bootstrap";

function Message(props) {
  console.log("Alert function");
  return (
    <div>
      {props.isChecked && (
        <Alert variant="success">
          <Alert.Heading>Hello!</Alert.Heading>
          <p>I'm displaying because the checkbox has been clicked.</p>
        </Alert>
      )}
    </div>
  );
}

export default Message;
