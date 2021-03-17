import { GUIDES_DATA } from "consts/consts";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Whatsapp from "../../assets/icons/whatsapp.png";

const path = '../../assets/icons/';

const Home = () => {
  const classes = useStyles();

  const [images, setImages] = useState<any[]>([]);
 
  return (
    <React.Fragment>
      <div className={classes.allScreen}>
          <img src={Whatsapp} style={{width:"40%", paddingRight:"25px"}}/>
          <img src={Whatsapp} style={{width:"40%", paddingRight:"25px"}}/>
          <img src={Whatsapp} style={{width:"40%", paddingRight:"25px"}}/>
          <img src={Whatsapp} style={{width:"40%", paddingRight:"25px"}}/>
          <img src={Whatsapp} style={{width:"40%", paddingRight:"25px"}}/>
      </div>
    </React.Fragment>
  );
};

export default Home;
