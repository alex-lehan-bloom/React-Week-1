import React from "react";

function ListItem(props) {
  return (
    <li className="list-group-item">
      <img src={props.img_src} />
      <span>{props.name}</span>
      <a href={props.location}>location</a>
    </li>
  );
}

export default ListItem;
