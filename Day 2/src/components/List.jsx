import React from "react";

function List(props) {
  let list_to_display = props.list_data;
  let list_of_lis = list_to_display.map((item) => (
    <li className="list-group-item" key={item}>
      {item}
    </li>
  ));
  return <ul className="list-group list-group-flush">{list_of_lis}</ul>;
}

export default List;
