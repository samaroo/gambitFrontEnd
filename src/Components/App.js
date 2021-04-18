import BackgroundPaperHome from './MainPage/Containers/BackgroundPaper';
import BackgroundPaperAnalytics from './AnalyticsPage/Containers/BackgroundPaper';
import NavBar from './NavBar';
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
		flexDirection: "column"
    },
	secondaryContainer: {
		width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
		flexDirection: "column"
	}
}));

const MainPage = (props) => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<NavBar/>
			<BackgroundPaperHome/>
		</Container>
	);
};

const AnalyticsPage = (props) => {
	const classes = useStyles();
	return (
		<Container className={classes.secondaryContainer}>
			<NavBar/>
			<BackgroundPaperAnalytics/>
		</Container>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={withRouter(MainPage)}/>
			<Route path='/analytics' exact component={withRouter(AnalyticsPage)}/>
		</BrowserRouter>
	);
}

export default App;
