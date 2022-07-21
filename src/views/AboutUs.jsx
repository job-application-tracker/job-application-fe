import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import AboutCard from '../components/AboutCard';
import aidanImg from '../../public/Photos/Aidan.jpeg';
import maryImg from '../../public/Photos/Mary.jpg';
import bradleyImg from '../../public/Photos/Bradley.jpeg';
import denverImg from '../../public/Photos/Denver.jpeg';

export default function AboutUs() {
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography sx={{ padding: 1.5 }} variant="h3">
          Meet the Developers!
        </Typography>
        <Grid sx={{ padding: 1.5 }} container spacing={2}>
          <Grid item md={3}>
            <AboutCard
              name={'Mary Martinez'}
              description={'bla'}
              linkedinLink={'https://www.linkedin.com/in/mary-diana-martinez/'}
              githubLink={'https://github.com/mary-martinez'}
              image={maryImg}
            />
          </Grid>
          <Grid item md={3}>
            <AboutCard
              name={'Aidan Liddiard'}
              description={'bla'}
              linkedinLink={'https://www.linkedin.com/in/aidan-liddiard/'}
              githubLink={'https://github.com/aidanliddiard'}
              image={aidanImg}
            />
          </Grid>
          <Grid item md={3}>
            <AboutCard
              name={'Denver McCarthy'}
              description={'bla'}
              linkedinLink={'https://www.linkedin.com/in/denvermccarthy/'}
              githubLink={'https://github.com/denvermccarthy'}
              image={denverImg}
            />
          </Grid>
          <Grid item md={3}>
            <AboutCard
              name={'Bradley Bird'}
              description={'bla'}
              linkedinLink={'https://www.linkedin.com/in/bradley-bird/'}
              githubLink={'https://github.com/bradley-bird'}
              image={bradleyImg}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
