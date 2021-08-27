import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { orange } from '../Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: orange,
    marginTop: '64px',
  },
  content: {
    width: '80%',
    margin: '0 auto',
  },
}));

const Intro = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
      </div>
    </div>
  );
};

export default Intro;
