import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Whatsapp from "../../assets/icons/whatsapp.png";
import Wifi from "../../assets/icons/Wi-fi.png";
import Message from "../../assets/icons/Message.png";
import Saffari from "../../assets/icons/Saffari.png";
import Phone from "../../assets/icons/Phone.png";
import GuideSlide from "pages/guideSlide/GuideSlide";
import { useHistory } from 'react-router-dom';

const path = '../../assets/icons/';

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
 
  return (
    <React.Fragment>
      <div className={classes.allScreen}>
          <img src={Whatsapp} style={{width:"40%", marginRight:"25px", borderRadius:"20px"}} onClick={() => history.push('/guides/Whatsapp')}/>
          <img src={Wifi} style={{width:"40%", marginRight:"25px", borderRadius:"20px"}} onClick={() => { history.push('/guides', { category: 'Wifi'})}}/>
          <img src={Saffari} style={{width:"40%", marginRight:"25px", borderRadius:"20px"}} onClick={() => { history.push('/guides', { category: 'Saffari'})}}/>
          <img src={Phone} style={{width:"40%", marginRight:"25px", borderRadius:"20px"}} onClick={() => { history.push('/guides', { category: 'Phone'})}}/>
          <img src={Message} style={{width:"40%", marginRight:"25px", borderRadius:"20px"}} onClick={() => { history.push('/guides', { category: 'Message'})}}/>
      </div>
    </React.Fragment>
  );
};

export default Home;
