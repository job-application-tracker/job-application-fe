import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModalForm from '../components/ModalForm';
import Sidebar from '../components/Sidebar';
import { useUserContext } from '../context/userContext';
import Board from './Board/Board';

export default function Progress() {
  const { getCurrentUser } = useUserContext();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const setUpdatedUser = async () => {
      const data = await getCurrentUser();
    };

    setUpdatedUser();
  }, []);

  return (
    <>
      <Button onClick={() => setOpen(true)} handleClose={() => setOpen(false)}>
        Open
      </Button>
      <ModalForm open={open} />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} sx={{ margin: 0 }}>
          <Board />
        </Grid>
      </Grid>
    </>
  );
}
