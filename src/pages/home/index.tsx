import { GUIDES_DATA } from "consts/consts";
import Guide from "pages/Guide/guide";
import NewGuide from "pages/newGuide/newGuide";
import React from "react";
import useStyles from "./styles";

const HomePage = () => {
  const classes = useStyles();

  return (
     <React.Fragment>
    {/* <Guide guide={GUIDES_DATA[0]}></Guide>  */}
      <NewGuide />
    </React.Fragment> 
  )
};

export default HomePage;
