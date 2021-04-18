import BackgroundPaper from './BackgroundPaper';
import NavBar from '../NavBar';
import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

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

function App() {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<NavBar/>
			<BackgroundPaper/>
		</Container>
	);
}

export default App;
