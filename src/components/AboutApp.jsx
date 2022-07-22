import { Container, Typography } from '@mui/material';
import React from 'react';

export default function AboutApp() {
  return (
    <Container
      sx={{
        paddingTop: '30px',
        width: '100%',
        marginTop: '20px',
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: '40px', paddingBottom: '30px' }}
        textAlign={'center'}
      >{`Welcome to job.find()`}</Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: '25px',
          paddingBottom: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
      >
        The job search tracker for developers.
      </Typography>
      <Typography
        variant="h5"
        sx={{ textAlign: 'justify', fontWeight: 'bolder' }}
      >
        Is your job search is returning null? Then job.find() is the app for
        you. If you only measure success by the number of offers you receive,
        hunting for a job can feel tedious and defeating. <br /> <br />
        Instead, we help you track and visualize all of the components of your
        job search process, including networking and coding time, to keep you
        aware of your overall progress and feeling motivated.
      </Typography>
    </Container>
  );
}
