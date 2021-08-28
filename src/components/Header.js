import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingTop: '10px',
  },
  left: {
    marginLeft: `calc(10% - 24px)`,
  },
  title: {
    fontWeight: '800',
  },
  grow: {
    flexGrow: 1,
  },
  right: {
    marginRight: `calc(10% - 24px)`,
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(0);

  const handleScroll = () => {
    const newY = window.scrollY;
    if (newY === 0) {
      setElevation(0);
    } else {
      setElevation(4);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToFeatures = () => {
    const features = document.getElementById("features");
    const scrollDistance = features.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scroll({
      top: scrollDistance,
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    const contact = document.getElementById("contact-us");
    const scrollDistance = contact.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: scrollDistance,
      behavior: 'smooth',
    });
  };

  return (
    <AppBar elevation={elevation} className={classes.appBar}>
      <Toolbar>
        <div className={classes.left}>
          <Button className={classes.buttonTitle} onClick={scrollToTop}>
            <Typography className={classes.title} variant="h4">
              Jio+
            </Typography>
          </Button>
        </div>
        <div className={classes.grow} />
        <div className={classes.right}>
          <Button className={classes.buttonFeature} onClick={scrollToFeatures}>
            <Typography className={classes.title} variant="h4">
              Features
            </Typography>
          </Button>
          <Button className={classes.buttonContact} onClick={scrollToContact}>
            <Typography className={classes.title} variant="h4">
              Contact Us
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
