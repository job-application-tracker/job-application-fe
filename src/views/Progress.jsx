import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useUserContext } from '../context/userContext';
import Board from './Board/Board';

export default function Progress() {
  const { getCurrentUser } = useUserContext();
  useEffect(() => {
    const setUpdatedUser = async () => {
      const data = await getCurrentUser();
    };

    setUpdatedUser();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Board />
        </Grid>
      </Grid>
    </Container>
  );
}
