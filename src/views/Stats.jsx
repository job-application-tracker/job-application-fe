import { Grid } from '@mui/material';
import React from 'react';
import Graph from '../components/Graph';
import Sidebar from '../components/Sidebar';

export default function Stats() {
  return (
    <Grid container spacing={2}>
      <Grid item md={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10} sx={{ margin: 0 }}>
        <Graph />
      </Grid>
    </Grid>
  );
}
