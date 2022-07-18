import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModalForm from '../components/ModalForm';
import { Container, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { useUserContext } from '../context/userContext';
import Board from './Board/Board';
import { CustomButton } from '../components/styled/CustomButton';

export default function Progress() {
  const { getCurrentUser } = useUserContext();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const setUpdatedUser = async () => {
      const data = await getCurrentUser();
    };

    setUpdatedUser();
  }, []);

  return (
    <>
      <CustomButton variant="contained" onClick={() => setOpen(true)}>
        Open
      </CustomButton>
      <ModalForm open={open} handleClose={handleClose} />
      <Grid container spacing={2}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10} sx={{ margin: 0 }}>
          <Board />
        </Grid>
      </Grid>
    </>
  );
}
