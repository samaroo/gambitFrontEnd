import { Line, Bar } from "react-chartjs-2";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
        color: theme.palette.primary.main,
        backgroundColor: "none",
        boxShadow: "none",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column"
    },
    title: {
        margin: "10px 0px"
    }
}));

const generateOptions = (ymin, ymax) => {
    return {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "#f5f5f5",
            titleFontColor: "#333",
            bodyFontColor: "#666",
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
        },
        responsive: true,
        scales: {
            yAxes: [
            {
                barPercentage: 1.6,
                gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent"
                },
                ticks: {
                suggestedMin: ymin,
                suggestedMax: ymax,
                padding: 20,
                fontColor: "#9a9a9a"
                }
            }
            ],
            xAxes: [
            {
                barPercentage: 1.6,
                gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.1)",
                zeroLineColor: "transparent",
                },
                ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
                }
            }
            ]
        }
    };
}

const generateDataFunc = (data) => (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.7, "rgba(29,140,248,0.17)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.15)");
    gradientStroke.addColorStop(0.2, "rgba(29,140,248,0.07)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0.04)"); //blue colors

    console.log(data);

    return {
        labels: data.labels,
        datasets: [
        {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: data.points,
        },
        ],
    };
};

const BlueGraph = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Typography variant="h6" className={classes.title}>
                {props.title}
            </Typography>
            <Line
                data={generateDataFunc(props.data)}
                options={generateOptions(props.ymin, props.ymax)}
            />
        </Container>
    );
};

export default BlueGraph;