import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { runApp } from "config/msal";

(async () => {
  let myApp = (<App />);
  ReactDOM.render(myApp, document.getElementById("root"));
})();

serviceWorker.register();