import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BlueGraph from '../Graphs/BlueGraph';
import { combinedGraphs } from '../../../Data/TensorboardData';

const useStyles = makeStyles((theme) => ({
    paperBack: {
        padding: theme.spacing(2),
        color: theme.palette.primary.main,
        backgroundColor: "#F5F6FA",
        borderRadius: 0,
        boxShadow: "none",
        width: "80%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: "50px",
        paddingBottom: "20px"
    },
    grid: {
        width: "100%",
        height: "80%"
    },
    row: {
        width: "100%",
        height: "100%",
        margin: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        marginBottom: "20px",
        borderRadius: "20px"
    }
}));

//wrapped paper component that allows us to call useStyles after custom theme is provided
const BackgroundPaper = () => {
    const classes = useStyles();

    return(
        <Paper className={classes.paperBack}>
            <Grid container className={classes.grid} spacing={3}>
                <Grid item className={classes.row} xs={12}>
                    <BlueGraph title={combinedGraphs[0].title} data={combinedGraphs[0].data} ymin={combinedGraphs[0].ymin} ymax={combinedGraphs[0].ymax}/>
                </Grid>
                <Grid item className={classes.row} xs={12}>
                    <BlueGraph title={combinedGraphs[1].title} data={combinedGraphs[1].data} ymin={combinedGraphs[1].ymin} ymax={combinedGraphs[1].ymax}/>
                </Grid>
                <Grid item className={classes.row} xs={12}>
                    <BlueGraph title={combinedGraphs[2].title} data={combinedGraphs[2].data} ymin={combinedGraphs[2].ymin} ymax={combinedGraphs[2].ymax}/>
                </Grid>
                <Grid item className={classes.row} xs={12}>
                    <BlueGraph title={combinedGraphs[3].title} data={combinedGraphs[3].data} ymin={combinedGraphs[3].ymin} ymax={combinedGraphs[3].ymax}/>
                </Grid>
                <Grid item className={classes.row} xs={12}>
                    <BlueGraph title={combinedGraphs[4].title} data={combinedGraphs[4].data} ymin={combinedGraphs[4].ymin} ymax={combinedGraphs[4].ymax}/>
                </Grid>
            </Grid>
        </Paper>
    );
};


export default BackgroundPaper;