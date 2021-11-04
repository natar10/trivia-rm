import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./styles/global.scss";

ReactDOM.hydrate(<App />, document.getElementById("root"));
