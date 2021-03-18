import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    allScreen: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        background:"rgb(217, 217, 217)",
    },
    guideList: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        overflowX: 'scroll', 
    },
    guideCard: {
        borderRadius: '20px',
        marginBottom: '10px',
        marginTop: "65px",
        marginLeft:"60px",
        marginRight:"60px",
        marginInlineEnd:"70px",
        paddingTop:"60px",
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
