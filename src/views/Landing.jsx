import { Container } from '@mui/material';
import React, { useState } from 'react';
import Auth from '../views/Auth/Auth';
import Step from '../components/Step';
import AboutApp from '../components/AboutApp';

function Landing() {
  const [signUp, setSignUp] = useState(true);

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'space-between',
          margin: 'auto',
        }}
      >
        <AboutApp />
        {signUp ? (
          <Step {...{ signUp, setSignUp }} />
        ) : (
          <Auth {...{ signUp, setSignUp }} />
        )}
      </Container>
    </>
  );
}

export default Landing;
