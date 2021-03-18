import React from "react";
import home from "../pages/home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
// import Footer from '../components/Footer';
import newGuide from '../pages/newGuide/newGuide'

const Routes = () => {

  return (
    <HashRouter>   
      <div style={{
        minHeight: "100vh",
        flexDirection: "column",
        display:"flex",
      }}>
        <Header/>
        <div style={{ flex: 1 ,marginTop:20}}>

          <Switch >
            <Route exact path="/" component={home}>
            {/* <Route exact path="/NewGuide" component={}/> */}
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};

export default Routes;
