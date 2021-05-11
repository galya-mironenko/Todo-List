import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header";

const App = () => {
  return (
    <AppHeader/>
  )
};

ReactDOM.render(<App/>, document.getElementById("root"));