import React from 'react';
import { Grid, makeStyles, Typography, Paper, Divider, useMediaQuery } from '@material-ui/core';
import { white, darkBlue } from '../Colors';
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
    paddingTop: '2rem',
  },
  title: {
    padding: '2rem 1rem',
  },
  title2: {
    padding: '0 1rem',
  },
  contentText: {
    padding: '2rem 1rem',
  },
  features: {
    [theme.breakpoints.down('xs')]: {
      fontWeight: 800,
      color: darkBlue,
    },
  },
}));

const Features = (props) => {
  const classes = useStyles();
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const verySmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  return (
    <div className={classes.root} id="features">
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant={verySmallScreen ? "h3" : "h2"} className={classes.features}>
              Features
            </Typography>
          </Grid>
          <Grid item xs={verySmallScreen ? 12 : smallScreen ? 6 : 4} align="center">
            <Paper elevation={3}>
              <img src={Payment} width="200" className={classes.image} alt="payment"/>
              {mediumScreen && !verySmallScreen ? (
                <div style={{ margin: '2rem 0' }}>
                  <Typography variant="h4" className={classes.title2}>
                    Payment
                  </Typography>
                  <Typography variant="h4" className={classes.title2}>
                    Tracking
                  </Typography>
                </div>
              ) : (
                <Typography variant="h4" className={classes.title}>
                  Payment Tracking
                </Typography>
              )}
              <Divider />
              <Typography variant="h6" className={classes.contentText}>
                Jio+ handles payments for the organizer, automatically tracking payments made via PayLah.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={verySmallScreen ? 12 : smallScreen ? 6 : 4} align="center">
            <Paper elevation={3}>
              <img src={Share} width="200" className={classes.image} alt="share"/>
              {mediumScreen && !verySmallScreen ? (
                <div style={{ margin: '2rem 0' }}>
                  <Typography variant="h4" className={classes.title2}>
                    Easy
                  </Typography>
                  <Typography variant="h4" className={classes.title2}>
                    Sharing
                  </Typography>
                </div>
              ) : (
                <Typography variant="h4" className={classes.title}>
                  Easy Sharing
                </Typography>
              )}
              <Divider />
              <Typography variant="h6" className={classes.contentText}>
                Jio+ is available on all platforms. Organisers and members can access Jio+ with a single link.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={verySmallScreen ? 12 : smallScreen ? 6 : 4} align="center">
            <Paper elevation={3}>
              <img src={ArtificialIntelligence} width="200" className={classes.image} alt="ai"/>
              {mediumScreen && !verySmallScreen ? (
                <div style={{ margin: '2rem 0' }}>
                  <Typography variant="h4" className={classes.title2}>
                    AI
                  </Typography>
                  <Typography variant="h4" className={classes.title2}>
                    Detection
                  </Typography>
                </div>
              ) : (
                <Typography variant="h4" className={classes.title}>
                  AI Detection
                </Typography>
              )}
              <Divider />
              <Typography variant="h6" className={classes.contentText}>
                Jio+ combines computer vision with AI to automatically detect prices from a receipt.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Features;
