import Landing from './views/Landing';
import { Redirect, Route, Switch } from 'react-router-dom';
import Progress from './views/Progress';
import Header from './components/Header';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { useUserContext } from './context/userContext';

export default function App() {
  const { currentUser } = useUserContext();

  return (
    <Box>
      <CssBaseline />
      <Header />
      <Switch>
        <Route path={'/progress'}>
          {currentUser.email ? <Progress /> : <Redirect to="/" />}
        </Route>
        <Route exact path={'/'}>
          {!currentUser.email ? <Landing /> : <Redirect to="/progress" />}
        </Route>
      </Switch>
    </Box>
  );
}
// dev
