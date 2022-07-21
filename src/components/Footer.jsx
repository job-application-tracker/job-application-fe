import { Typography, Link as MuiLink, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        <MuiLink
          color="inherit"
          href="https://github.com/job-application-tracker"
        >
          job.find()
        </MuiLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  return (
    <Box
      sx={{
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px black solid',
      }}
    >
      <Copyright />
      <Link to={'/about-us'}>Meet the Developers!</Link>
    </Box>
  );
}
