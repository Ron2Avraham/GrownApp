import React from "react";
import * as pages from "../pages";
import ScrollToTop from "../components/shared/scrollToTop/scrollToTop";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "components/shared/header/header";

const Routes = () => {

  return (
    <HashRouter>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={pages.HomePage}></Route>
        </Switch>
      </ScrollToTop>
    </HashRouter>
  );
};

export default Routes;
