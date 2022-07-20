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
import { useMode } from './context/ModeContext';
import AboutUs from './views/AboutUs';

export default function App() {
  const { currentUser, activeStep } = useUserContext();
  const { theme } = useMode();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <Header />
        <Switch>
          <PrivateRoute path={'/progress'}>
            <Progress />
          </PrivateRoute>
          <PrivateRoute path={'/stats'}>
            <Stats />
          </PrivateRoute>
          <Route path={'/about-us'}>
            <AboutUs />
          </Route>
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
