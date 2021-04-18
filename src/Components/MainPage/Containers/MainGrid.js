import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MainForm from '../MainForm';
import Verdict from '../Verdict';
import { CircularProgressbarWithChildren as Progress, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    center: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    progress: {
        height: "50%"
    }
}));

const style = buildStyles({
    strokeLinecap: "round",
    textSize: "1em",
    pathTransitionDuration: 1,
    pathColor: "#3F52B5",
    textColor: "#3F52B5",
    trailColor: "#FFFFFF"
});

const MainGrid = (props) => {
    const classes = useStyles();

    return(
        <Grid container className={classes.center} spacing={3}>
            <Grid item md={6} sm={12} className={classes.center}>
                <MainForm/>
            </Grid>
            <Grid item md={6} sm={12} className={classes.center}>
                <Grid container className={classes.center} spacing={2} direction="column">
                    <Grid item xs={6} className={classes.center}>
                        <Verdict value={props.verdict}/>
                    </Grid>
                    <Grid item xs={5} className={classes.center}>
                        <Progress
                            value={props.confidence}
                            minValue={0}
                            maxValue={100}
                            className="progress"
                            text={`${props.confidence}%`}
                            styles={style}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {verdict: state.verdict, confidence: state.confidence}
};

export default connect(mapStateToProps)(MainGrid);