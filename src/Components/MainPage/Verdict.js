import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    title: {
        height: "20%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    metric: {
        height: "60%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3em"
    },
    gridContainer: {
        height: "80%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#3F52B5",
        borderRadius: "20px",
        color: "#FFFFFF",
        boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
    }
}));

const Verdict = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.gridContainer}>
            <Container className={classes.title}>Verdict</Container>
            <Container className={classes.metric}>{props.value}</Container>
            <Container className={classes.title}></Container>
        </Container>
    );
};

export default Verdict;