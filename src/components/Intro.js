import React from 'react';
import { makeStyles, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { orange, darkBlue } from '../Colors';
import JioPlusHome from '../images/JioPlus-home.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: orange,
    marginTop: '80px',
  },
  fillerSpace: {
    height: '36px',
  },
  content: {
    width: '80%',
    margin: '0 auto',
  },
  contentText: {
    marginTop: '1rem',
  },
  tryButton: {
    marginTop: '1rem',
  },
  image: {
    [theme.breakpoints.up('lg')]: {
      height: `calc(100vh - 64px)`,
    },
    [theme.breakpoints.down('md')]: {
      width: '200px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '200px',
    },
  },
  container: {
    paddingBottom: '3rem',
  },
  gridText: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '80vh',
    },
  },
}));

const Intro = (props) => {
  const classes = useStyles();
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const verySmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const verySmallScreenView = () => {
    return (
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} align="center">
          <img src={JioPlusHome} className={classes.image} alt="jio+"/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" style={{color: darkBlue, fontWeight: '800'}}>
            Craving For Food?
          </Typography>
          <Typography variant="h5" className={classes.contentText}>
            Jio+ will change the way you organise group orders. We make collating orders and collecting payments fuss-free.
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const smallScreenView = () => {
    return (
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} align="center">
          <img src={JioPlusHome} className={classes.image} alt="jio+"/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">
            Craving For Food?
          </Typography>
          <Typography variant="h3" className={classes.contentText}>
            Jio+ will change the way you organise group orders. We make collating orders and collecting payments fuss-free.
          </Typography>
        </Grid>
      </Grid>
    );
  }

  const normalScreenView = () => {
    return (
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={mediumScreen ? 4 : 6} align="center">
          <img src={JioPlusHome} className={classes.image} alt="jio+"/>
        </Grid>
        <Grid item xs={mediumScreen ? 8 : 6} className={classes.gridText}>
          <Typography variant="h2">
            Craving For Food?
          </Typography>
          <Typography variant={mediumScreen ? "h4" : "h3"} className={classes.contentText}>
            Jio+ will change the way you organise group orders. We make collating orders and collecting payments fuss-free.
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.fillerSpace} />
      <div className={classes.content}>
        {verySmallScreen ? (
          verySmallScreenView()
        ) : smallScreen ? (
          smallScreenView()
        ) : (
          normalScreenView()
        )}
      </div>
    </div>
  );
};

export default Intro;
