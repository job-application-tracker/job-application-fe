import { createTheme } from '@mui/material/styles';

// TODO: set theme to correct colors.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#586F7C',
      light: '#b8dbd9',
      dark: '#2F4550',
    },
  },
  typography: {
    fontFamily: "'Oswald', sans-serif",
    h1: {
      fontFamily: "'Fauna One', serif",
      fontWeight: 400,
      fontSize: '4rem',
    },
    h2: {
      fontFamily: "'Josefin Sans', sans-serif",
    },
    h3: {
      fontFamily: "'Josefin Sans', sans-serif",
    },
    h4: {
      fontFamily: "'Josefin Sans', sans-serif",
    },
    h5: {
      fontFamily: "'Josefin Sans', sans-serif",
    },
    h6: {
      fontFamily: "'Josefin Sans', sans-serif",
    },
  },
});

export default theme;
