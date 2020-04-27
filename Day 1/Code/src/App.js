// Tutorial: https://www.youtube.com/watch?v=qwtaCidsNFw&feature=youtu.be

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.scss";

import { Container, Row, Col } from "react-bootstrap";
import { PizzaCard } from "./components/PizzaCard";
import { Confirmation } from "./components/Confirmation";
import pizzas from "./data.json";

function App() {
  return (
    <>
      <Confirmation></Confirmation>
      <Container>
        <Row>
          <p>Hello There</p>
        </Row>
      </Container>
    </>
  );
}

export default App;
