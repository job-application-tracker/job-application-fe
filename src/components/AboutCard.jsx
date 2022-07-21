import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar, ButtonGroup, Card, Typography } from '@mui/material';

export default function AboutCard({
  name,
  linkedinLink,
  githubLink,
  description,
  image,
}) {
  return (
    <Card
      sx={{
        overflowY: 'auto',
        boxShadow: 5,
        background: 'common.background',
        borderRadius: 2,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
        height: '400px',
      }}
    >
      <Typography variant="h4">{name}</Typography>
      <Avatar sx={{ width: '200px', height: '200px' }} src={image} />
      <ButtonGroup>
        <LinkedInIcon
          sx={{ fontSize: '50px' }}
          onClick={() => window.open(linkedinLink)}
        />
        <GitHubIcon
          sx={{ fontSize: '50px' }}
          onClick={() => window.open(githubLink)}
        />
      </ButtonGroup>
      <Typography variant="p">{description}</Typography>
    </Card>
  );
}
