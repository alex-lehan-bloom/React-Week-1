import React from "react";
import List from "./components/List";
import user_data from "./data/user-mock-data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

function App() {
  return (
    <div>
      <h1>User Data</h1>
      <List list_data={user_data}></List>
    </div>
  );
}

export default App;
