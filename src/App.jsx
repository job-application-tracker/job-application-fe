import Landing from './views/Landing';
import { Route, Switch } from 'react-router-dom';
import Progress from './views/Progress';

export default function App() {
  return (
    <Switch>
      <Route path={'/progress'}>
        <Progress />
      </Route>
      <Route exact path={'/'}>
        <Landing />
      </Route>
    </Switch>
  );
}
// dev
