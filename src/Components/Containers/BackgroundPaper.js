import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MainGrid from './MainGrid';
import AnimatedType from '../AnimatedType';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paperBack: {
        padding: theme.spacing(2),
        color: theme.palette.primary.main,
        backgroundColor: "#F5F6FA",
        borderRadius: 0,
        boxShadow: "none",
        height: "80%",
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    grid: {
        height: "100%",
        width: "100%"
    },
    type: {
        width: "100%",
        height: "20%",
        margin: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    main: {
        width: "100%",
        height: "80%",
        margin: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

//wrapped paper component that allows us to call useStyles after custom theme is provided
const BackgroundPaper = () => {
    const classes = useStyles();

    return(
        <Paper className={classes.paperBack}>
            <Grid container className={classes.grid} spacing={3}>
                <Grid item className={classes.type}  xs={12}>
                    <AnimatedType/>
                </Grid>
                <Grid item xs={12} className={classes.main}>
                    <MainGrid/>
                </Grid>
            </Grid>
        </Paper>
    );
};


export default BackgroundPaper;