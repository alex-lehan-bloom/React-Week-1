import React from "react";
import ListItem from "./components/ListItem";
import logo from "./logo.svg";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Exercise 2 - Travel Locations</h1>
      <ul className="list-group">
        <ListItem
          name={"Tel Aviv"}
          img_src={"./images/day_1/tel_aviv.jpg"}
          location={"https://goo.gl/maps/xv5mFHnDUou87HCA8"}
        ></ListItem>
        <ListItem
          name={"Amherst"}
          img_src={"./images/day_1/amherst_ma.jpg"}
          location={"https://goo.gl/maps/f6JJDn8Rb6ucgjFv9"}
        ></ListItem>
        <ListItem
          name={"Oxford"}
          img_src={"./images/day_1/oxford.jpg"}
          location={"https://goo.gl/maps/YyLQV1e7BF4kz6PN9"}
        ></ListItem>
      </ul>
    </div>
  );
}

export default App;
