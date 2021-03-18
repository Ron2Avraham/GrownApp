import React from "react";
import home from "../pages/home";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import GuideSlide from "pages/guideSlide/GuideSlide";
import Guide from "pages/Guide/guide";

// import Footer from '../components/Footer';

const Routes = () => {

  return (
    <HashRouter>   
      <div style={{
        minHeight: "100vh",
        flexDirection: "column",
        display:"flex",
        backgroundColor:"#d9d9d9"
      }}>
        <Header/>
        {/* <div style={{ flex: 1 ,marginTop:20}}> */}

          <Switch >
            <Route exact path="/" component={home} />
            <Route exact path="/guides/:category" component={GuideSlide}/>
            <Route exact path="/guide/:source" component={Guide}/>
          </Switch>
        {/* </div> */}
      </div>
    </HashRouter>
  );
};

export default Routes;
