import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { runApp } from "config/msal";

(async () => {
  console.log("Time:", new Date().toLocaleString());
  let myApp = await runApp(<App />);
  ReactDOM.render(myApp, document.getElementById("root"));
})();

serviceWorker.register();