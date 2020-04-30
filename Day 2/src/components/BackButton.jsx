import React from "react";
import { Button } from "react-bootstrap";

function BackButton() {
  return (
    <Button variant="primary" className="back-button">
      <span>&#10550;</span>
    </Button>
  );
}

export default BackButton;
