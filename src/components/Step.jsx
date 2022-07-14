import { Stepper, Step, StepLabel, Container } from '@mui/material';
import React, { useState } from 'react';
import Auth from './Auth';
import GoalsForm from './GoalsForm';

function SignUpStep({ signUp, setSignUp }) {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    if (activeStep <= 1) setActiveStep((prevStep) => prevStep + 1);
  };

  return (
    <Container maxWidth="sm">
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>first</StepLabel>
        </Step>
        <Step>
          <StepLabel>second</StepLabel>
        </Step>
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
