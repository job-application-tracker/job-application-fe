import Landing from './views/Landing';
import { Redirect, Route, Switch } from 'react-router-dom';
import Progress from './views/Progress';
import Header from './components/Header';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { useUserContext } from './context/userContext';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  const { currentUser, activeStep } = useUserContext();

  return (
    <Box>
      <CssBaseline />
      <Header />
      <Switch>
        <PrivateRoute path={'/progress'}>
          <Progress />
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
  );
}
// dev
