import { ThemeProvider, makeStyles } from '@material-ui/core';
import { theme } from './Theme';
import Intro from './components/Intro';
import Features from './components/Features';
import Header from './components/Header';
import Contact from './components/Contact';

const useStyles = makeStyles((theme) => ({
  app: {},
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Header />
        <Intro />
        <Features />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
