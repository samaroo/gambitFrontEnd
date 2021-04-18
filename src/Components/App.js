import BackgroundPaper from './MainPage/Containers/BackgroundPaper';
import NavBar from './NavBar';
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
		flexDirection: "column"
    }
}));

const MainPage = (props) => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<NavBar/>
			<BackgroundPaper/>
		</Container>
	);
};

const AnalyticsPage = (props) => {
	return (
		<Container>
			<NavBar/>
		</Container>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={MainPage}/>
			<Route path='/analytics' exact component={AnalyticsPage}/>
		</BrowserRouter>
	);
}

export default App;
