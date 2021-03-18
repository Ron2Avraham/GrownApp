import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    allScreen: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        background:"#cce5ff",
    },
    guideList: {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll', 
    },
    guideCard: {
        borderRadius: '0px',
        margin: '10px',
        marginTop: "90px",
        marginInlineEnd:"50px",
        paddingTop:"60px",
        marginLeft:"60px",
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        boxShadow: '0px 0px 30px -5px rgba(0,0,0,0.75)',
        width:"300px",
        height: "570px",
        background:"white",
    }
}));

export default useStyles;
