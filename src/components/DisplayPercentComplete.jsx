import { Box } from '@mui/system';
import React from 'react';

export default function DisplayPercentComplete({ complete, total }) {
  const percent = Math.round((complete / total) * 100);
  return (
    <Box>
      <h3>{percent}%</h3>
    </Box>
  );
}
