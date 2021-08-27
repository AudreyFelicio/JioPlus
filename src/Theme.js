import { createTheme } from '@material-ui/core';
import { orange } from './Colors';

export const theme = createTheme({
  palette: {
    primary: { main: orange },
  },
  typography: {
    body1: {
      fontFamily: 'Monserrat',
    },
    button: {
      fontFamily: 'Monserrat',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Monserrat',
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
    },
    h4: {
      fontFamily: 'Monserrat',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Monserrat',
      fontWeight: 500,
    },
    body2: {
      fontFamily: 'Monserrat',
      fontWeight: 700,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        height: '64px',
      },
    },
  },
});
