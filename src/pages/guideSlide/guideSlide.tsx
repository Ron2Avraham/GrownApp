import { GUIDES_DATA } from "consts/consts";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Footer from "../footer/footer";

const path = '../../assets/icons/';

const guideSlide = () => {
  const classes = useStyles();

  const [images, setImages] = useState<any[]>([]);
  const [guideCards, setGuideCards] = useState<any>();

  const fetch = async () => {
    for (const guide of GUIDES_DATA) {
      await import('../../assets/icons/' + guide.icon).then((data) => {
        setImages( prevState => 
         [...prevState, {
            name: guide.name,
            icon: data.default
          }]
      )
      })
    }
  }

  useEffect(() =>{
    fetch()
  }, [])

  useEffect(() => {
    setGuideCards(
      GUIDES_DATA.map(guide => {
        return(
        <div className={classes.guideCard}>
          {/* {console.log(path + guide.icon)} */}
          <img style={{width:"280px"}} src={images.find((image) => image.name === guide.name)?.icon} />
          {/* {images !== undefined ? console.log(images) : 0} */}
          <span style={{textDecorationThickness:""}}>{guide.name}</span>
        </div>);
      })
    );
  }, [images]);

  return (
    <React.Fragment>
      <div className={classes.allScreen}>
        {/* <Footer/> */}
        <div className={classes.guideList}>
          {guideCards}
        </div>
      </div>
    </React.Fragment>
  );
};

export default guideSlide;
