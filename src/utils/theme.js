import { createTheme } from '@mui/material/styles';
// TODO: set theme to correct colors.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f4f4f9',
      light: '#b8dbd9',
      dark: '#121212',
    },
    secondary: {
      main: '#2f4550',
    },
  },
  zIndex: {
    tooltip: 1800,
  },
});

export default theme;
