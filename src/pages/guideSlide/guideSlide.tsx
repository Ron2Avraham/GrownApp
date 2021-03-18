import { GUIDES_DATA } from "consts/consts";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useHistory, useParams } from 'react-router-dom';

const path = '../../assets/icons/';

const GuideSlide = () => {
  const classes = useStyles();
  const [previews, setPreviews] = useState<any[]>([]);
  const [guideCards, setGuideCards] = useState<any>();
  const history = useHistory();
  const {category} = useParams<{category: string}>();

  console.log(category);

  const filteredDate = GUIDES_DATA.filter((data) => {
    return data.category === category
  })

  const fetch = async () => {
    for (const guide of filteredDate) {
      await import('../../assets/preview/' + guide.preview).then((data) => {
        setPreviews((prevState) => 
         [...prevState, {
            name: guide.name,
            preview: data.default
          }]
      )
      })
    }
  }

  useEffect(() =>{
    fetch()
  }, [])

  useEffect(() => {
    console.log(previews);
    setGuideCards(
      GUIDES_DATA.map(guide => {
        return(
        <div className={classes.guideCard}>
          <img style={{width:"280px",height:"500px"}} onClick={()=> {
            history.push(`/guide/${guide.guidePic}`)
          }} src={previews.find((image) => image.name === guide.name)?.preview} />
        </div>);
      })
    );
  }, [previews]);

  return (
    <React.Fragment>
      <div className={classes.allScreen}>
        {/* <Footer/>  */}
        <div className={classes.guideList}>
          {guideCards}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GuideSlide;
