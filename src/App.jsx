import Landing from './views/Landing';
import { Redirect, Route, Switch } from 'react-router-dom';
import Progress from './views/Progress';
import Header from './components/Header';
import { Box } from '@mui/system';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useUserContext } from './context/userContext';
import PrivateRoute from './components/PrivateRoute';
import Stats from './views/Stats';
import { useState } from 'react';

export default function App() {
  const { currentUser, activeStep } = useUserContext();
  const [lightMode, setLightMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: lightMode ? 'light' : 'dark',
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

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Header setLightMode={setLightMode} lightMode={lightMode} />
        <Switch>
          <PrivateRoute path={'/progress'}>
            <Progress />
          </PrivateRoute>
          <PrivateRoute path={'/stats'}>
            <Stats />
          </PrivateRoute>
          <Route exact path={'/'}>
            {!currentUser.email || activeStep === 1 ? (
              <Landing />
            ) : (
              <Redirect to="/progress" />
            )}
            {/*Can implement this in the step fxn in context */}
            {/* <Landing /> */}
          </Route>
        </Switch>
      </Box>
    </ThemeProvider>
  );
}
// dev
