import { Box, Grid, Typography } from '@mui/material';
import AboutCard from '../components/AboutCard';
import aidanImg from '../../public/Photos/Aidan.jpeg';
import maryImg from '../../public/Photos/Mary.jpeg';
import bradleyImg from '../../public/Photos/Bradley.jpeg';
import denverImg from '../../public/Photos/Denver.jpeg';
import AboutApp from '../components/AboutApp';

export default function AboutUs() {
  return (
    <>
      <AboutApp />
      <Box
        sx={{
          height: '81vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '1.5em 0',
        }}
      >
        <Typography sx={{ padding: 1.5, marginTop: '1em' }} variant="h3">
          Meet the Developers!
        </Typography>
        <Typography sx={{ padding: 1.5 }} variant="p">
          Please reach out and add us on LinkedIn!
        </Typography>
        <Grid sx={{ padding: 1.5 }} container spacing={2}>
          <Grid item md={3}>
            <AboutCard
              name={'Mary Martinez'}
              description={
                'Mary is a full-stack software engineer located in Portland, Oregon. In her free time, she likes running, snorkeling, listening to audio books, and hanging out with her husband and toddler.'
              }
              linkedinLink={'https://www.linkedin.com/in/mary-diana-martinez/'}
              githubLink={'https://github.com/mary-martinez'}
              image={maryImg}
            />
          </Grid>
          <Grid item md={3}>
            <AboutCard
              name={'Aidan Liddiard'}
              description={
                'Aidan is a full-stack software engineer, currently located in Portland, OR. In her free time, she likes reading, puzzling, running, and traveling to cool places.'
              }
              linkedinLink={'https://www.linkedin.com/in/aidan-liddiard/'}
              githubLink={'https://github.com/aidanliddiard'}
              image={aidanImg}
            />
          </Grid>
          <Grid item md={3}>
            <AboutCard
              name={'Denver McCarthy'}
              description={
                'Denver is a full-stack software engineer located in Portland, OR. In his free time, he loves camping, skiing, and doing code challenges.'
              }
              linkedinLink={'https://www.linkedin.com/in/denvermccarthy/'}
              githubLink={'https://github.com/denvermccarthy'}
              image={denverImg}
            />
          </Grid>
          <Grid item md={3}>
            <AboutCard
              name={'Bradley Bird'}
              description={
                'Bradley is a full-stack software engineer located on the Oregon coast. In his free time, he enjoys gaming, problem-solving, and coding complex CSS.'
              }
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
