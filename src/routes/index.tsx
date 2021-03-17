import React from "react";
import home from "../pages/home";
import { HashRouter, Route, Switch } from "react-router-dom";

const Routes = () => {

  return (
    <HashRouter>
      {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={home}></Route>
        </Switch>
    </HashRouter>
  );
};

export default Routes;
