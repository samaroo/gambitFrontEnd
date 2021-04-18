import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    title: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    metric: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4em"
    },
    gridContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#3F52B5",
        borderRadius: "20px",
        color: "#FFFFFF"
    }
}));

const Confidence = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.gridContainer}>
            <h6>Verdict</h6>
            <h6>10%</h6>
            <h6></h6>
        </Container>
    );
};

export default Confidence;