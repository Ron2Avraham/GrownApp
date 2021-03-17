import React from "react";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import rtl from "jss-rtl";
import Routes from "./routes";
import GlobalState from "./contexts/GlobalState";
import "./App.css";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <div className="App">
      <GlobalState>
        <StylesProvider jss={jss}>
          <Routes />
        </StylesProvider>
      </GlobalState>
    </div>
  );
}

export default App;
