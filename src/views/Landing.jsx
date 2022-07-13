import { Container } from '@mui/material';
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Auth from '../components/Auth';
// import Auth from '../components/Auth';
import Step from '../components/Step';

function Landing() {
  const { url, path } = useRouteMatch();
  return (
    <>
      <Container>
        <Switch>
          <Route path={`${path}/`}>
            <Step url={url} />
          </Route>
          <Route path={`/signIn`}>
            <Auth url={url} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default Landing;
