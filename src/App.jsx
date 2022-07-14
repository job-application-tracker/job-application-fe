import Landing from './views/Landing';
import { Route, Switch } from 'react-router-dom';
import Progress from './views/Progress';
import Header from './components/Header';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';

export default function App() {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Switch>
        <Route path={'/progress'}>
          <Progress />
        </Route>
        <Route exact path={'/'}>
          <Landing />
        </Route>
      </Switch>
    </Box>
  );
}
// dev
