import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStylesScroll = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

//Scroll to top component
const ScrollTop = (props) => {
  const { children, window } = props;
  const classes = useStylesScroll();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const useStylesNav = makeStyles((theme) => ({
    bar: {
        backgroundColor: '#F5F6FA',
        boxShadow: 'none',
        color: theme.palette.primary.main,
        padding: '1% 10%'
    },
    title: {
        flexGrow: 1,
        textDecoration: "none",
        color: "#3F52B5"
    },
    item: {
        marginRight: "50px"
    },
    link: {
        textDecoration: "none"
    },
    arrow: {
      color: "#3F52B5",
    }
}));

export default function NavBar(props) {
    const classes = useStylesNav();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.bar}>
                <Toolbar>
                    {/* <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Link to='/' className={classes.title}>
                        <Typography variant="h6" className={classes.title}>Gambit</Typography>
                    </Link>
                    <Link to='/analytics' className={classes.link}>
                        <Button variant="outlined" color="primary" className={classes.item}>
                            See How We Stack Up
                        </Button>
                    </Link>
                    <IconButton
                        aria-haspopup="true"
                        onClick={()=>{window.location.href = 'https://github.com/samaroo/gambitFrontEnd';}}
                        color="inherit"
                    >
                        <GitHubIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}