import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ButtonGroup, Card, Typography } from '@mui/material';

export default function AboutCard({
  name,
  linkedinLink,
  githubLink,
  description,
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
      <ButtonGroup>
        <LinkedInIcon onClick={() => window.open({ linkedinLink })} />
        <GitHubIcon onClick={() => window.open({ githubLink })} />
      </ButtonGroup>
      <Typography variant="p">{description}</Typography>
    </Card>
  );
}
