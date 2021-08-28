import React from 'react';
import { makeStyles, Grid, Typography, TextField, Button } from '@material-ui/core';
import { white } from '../Colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: white,
  },
  fillerSpace: {
    height: '36px',
  },
  content: {
    width: '80%',
    margin: '0 auto',
    padding: '3rem 0',
    [theme.breakpoints.up('lg')]: {
      width: '60%',
    }
  },
  form: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    }
  },
  message: {
    padding: '1rem 0',
  },
  textField: {
    padding: '0.5rem 0',
    width: '100%'
  },
  submitButton: {
    width: '40%',
    [theme.breakpoints.down('xs')]: {
      width: '60%',
    },
  },
}));

const Contact = (props) => {
  const classes = useStyles();

  const Form = () => {
    return (
      <Grid container>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            className={classes.textField}
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            className={classes.textField}
            label="Email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            className={classes.textField}
            label="Message"
            variant="outlined"
            minRows="10"
            multiline="true"
          />
        </Grid>
        <Grid item xs={12} align="left">
          <Button variant="contained" color="secondary" className={classes.submitButton}>
            <Typography variant="h5">
              Submit
            </Typography>
          </Button>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className={classes.root} id="contact-us">
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h2">
              Contact Us
            </Typography>
            <Typography variant="h4" className={classes.message}>
              Interested in Jio+? Feel free to sign up and we will send you our prototype.
            </Typography>
            <div className={classes.form}>
              {Form()}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
