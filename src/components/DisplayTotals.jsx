import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchTotalAchievements } from '../services/achievements';
import SumCard from './SumCard';

export default function DisplayTotals() {
  const [totals, setTotals] = useState({});
  useEffect(() => {
    try {
      const getData = async () => {
        const totalAchievements = await fetchTotalAchievements();
        setTotals(totalAchievements);
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 6, md: 8 }}
    >
      <Grid item xs={2} sm={4} md={4}>
        <SumCard type={'applications'} value={totals.appSum} />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <SumCard type={'networking conversations'} value={totals.networkSum} />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <SumCard type={'meetups'} value={totals.meetupSum} />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <SumCard type={'linkedin connections'} value={totals.linkedinSum} />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <SumCard type={'hours coding'} value={totals.codeSum} />
      </Grid>
    </Grid>
  );
}
