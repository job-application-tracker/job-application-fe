import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function AboutUs() {
  return (
    <Box>
      <Typography variant="h3">Meet the Developers!</Typography>
      <Card>
        <Typography variant="h4">Mary Martinez</Typography>
        <LinkedInIcon
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/mary-diana-martinez/',
              '_blank'
            )
          }
        />
        <GitHubIcon />
        <Typography variant="p">
          Some cool words about how great mary is and how she would love a job!
        </Typography>
      </Card>
    </Box>
  );
}
