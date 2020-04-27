import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function List(props) {
  let list_to_display = props.list_data;
  let list_of_lis = list_to_display.map((item) => (
    <ListGroup horizontal="sm" className="my-2" key={item.id}>
      <ListGroup.Item className="list-one">{item.id}</ListGroup.Item>
      <ListGroup.Item className="list-two">{item.first_name}</ListGroup.Item>
      <ListGroup.Item className="list-three">{item.email}</ListGroup.Item>
      <ListGroup.Item className="list-four">{item.country}</ListGroup.Item>
    </ListGroup>
  ));
  return <div>{list_of_lis}</div>;T