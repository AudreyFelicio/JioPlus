import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { orange } from '../Colors';
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
}));

const Intro = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.fillerSpace} />
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={6} align="center">
            <img src={JioPlusHome} style={{height: `calc(100vh - 64px)`}}/>
          </Grid>
          <Grid xs={6}>
            <Typography variant="h2">
              Hungry and Craving For Food?
            </Typography>
            <Typography variant="h3" className={classes.contentText}>
              Jio+ is a one-stop food ordering solution. We make collating orders and payment collection fuss-free.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Intro;
