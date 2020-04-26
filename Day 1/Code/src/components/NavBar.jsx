import React from "react";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function NavBar(props) {
  return (
    <Navbar bg="white" variant="white">
      <Nav>
        <Nav.Link href="#home">{props.nav_item_1}</Nav.Link>
        <Nav.Link href="#features">{props.nav_item_2}</Nav.Link>
        <Nav.Link className="active" href="#pricing">
          {props.nav_item_3}
        </Nav.Link>
        <img src={props.logo_src} />
        <i className={props.font_awesome_logo} aria-hidden="true"></i>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
