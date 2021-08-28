import React from 'react';
import { Grid, makeStyles, Typography, Paper, Divider } from '@material-ui/core';
import { orange, white, blue } from '../Colors';
import ArtificialIntelligence from '../images/ai.svg';
import Share from '../images/share.svg';
import Payment from '../images/payment.svg';

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
  },
  image: {
    paddingTop: '1rem',
  },
  title: {
    padding: '1rem 0',
  },
  contentText: {
    padding: '1rem 0',
  },
}));

const Features = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h2">
              Features
            </Typography>
          </Grid>
          <Grid item xs={4} align="center">
            <Paper elevation={3}>
              <img src={Payment} width="200" className={classes.image}/>
              <Typography variant="h4" className={classes.title}>
                Payment Tracking
              </Typography>
              <Divider />
              <Typography variant="h6" className={classes.contentText}>
                Jio+ provides automated payment tracking for Paylah.
                Members can pay within a few clicks and organizers just need to wait and relax.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} align="center">
            <Paper elevation={3}>
              <img src={Share} width="200" className={classes.image}/>
              <Typography variant="h4" className={classes.title}>
                Easy Sharing
              </Typography>
              <Divider />
              <Typography variant="h6" className={classes.contentText}>
                Jio+ is available on all platforms. Organizers just need to share the link with members.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} align="center">
            <Paper elevation={3}>
              <img src={ArtificialIntelligence} width="200" className={classes.image}/>
              <Typography variant="h4" className={classes.title}>
                AI Detection
              </Typography>
              <Divider />
              <Typography variant="h6" className={classes.contentText}>
                Jio+ uses smart custom AI with machine learning to automatically detect prices from receipt.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Features;
