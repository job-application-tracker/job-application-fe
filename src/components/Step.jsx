import { Stepper, Step, StepLabel, Container } from '@mui/material';
import React, { useState } from 'react';
import { useUserContext } from '../context/userContext';
import Auth from '../views/Auth/Auth';

import GoalsForm from './GoalsForm';

function SignUpStep({ signUp, setSignUp }) {
  const { activeStep, nextStep } = useUserContext();

  return (
    <Container maxWidth="sm">
      <Stepper activeStep={activeStep}>
        <Step></Step>
        <Step></Step>
      </Stepper>
      <Container>
        {activeStep === 0 && (
          <Auth nextStep={nextStep} signUp={signUp} setSignUp={setSignUp} />
        )}
        {activeStep === 1 && <GoalsForm />}
      </Container>
    </Container>
  );
}

export default SignUpStep;
