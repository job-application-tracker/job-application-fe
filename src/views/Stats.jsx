import { Grid } from '@mui/material';
import React from 'react';
import DisplayTotals from '../components/DisplayTotals';
import Graph from '../components/Graph';
import Sidebar from '../components/Sidebar';

export default function Stats() {
  return (
    <Grid
      sx={{
        padding: 1.5,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
      container
      spacing={2}
    >
      <Grid
        item
        md={7}
        sx={{
          margin: 0,
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'column',
        }}
      >
        <Graph />
      </Grid>
      <Grid item md={3}>
        <DisplayTotals />
      </Grid>
    </Grid>
  );
}
