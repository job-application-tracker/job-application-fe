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
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">{name}</Typography>
      <Avatar sx={{ width: '100px', height: '100px' }} src={image} />
      <ButtonGroup>
        <LinkedInIcon onClick={() => window.open({ linkedinLink })} />
        <GitHubIcon onClick={() => window.open({ githubLink })} />
      </ButtonGroup>
      <Typography variant="p">{description}</Typography>
    </Card>
  );
}
