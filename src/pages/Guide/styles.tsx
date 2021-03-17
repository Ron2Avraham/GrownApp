import { makeStyles, Theme } from "@material-ui/core/styles";



const useStyles = makeStyles({
    shadowDiv: {
        backdropFilter: 'blur(0.6vh)',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    imagesDiv: {
        overflowY: "scroll",
        whiteSpace: "nowrap",  
              
    }
  });

export default useStyles;
