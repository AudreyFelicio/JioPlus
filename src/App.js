import Header from './components/Header';
import { ThemeProvider, makeStyles } from '@material-ui/core';
import { theme } from './Theme';
import Intro from './components/Intro';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Header />
        <Intro />
      </div>
    </ThemeProvider>
  );
}

export default App;
