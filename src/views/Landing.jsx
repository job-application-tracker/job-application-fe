import { Container } from '@mui/material';
import React, { useState } from 'react';
import Auth from '../components/Auth';
import Step from '../components/Step';

function Landing() {
  const [signUp, setSignUp] = useState(true);

  return (
    <>
      <Container>
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
