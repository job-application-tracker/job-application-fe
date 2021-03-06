import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import ModalForm from '../components/ModalForm';
import Sidebar from '../components/Sidebar';
import { useUserContext } from '../context/userContext';
import Board from './Board/Board';
import { CustomButton } from '../components/styled/CustomButton';
import { useJobContext } from '../context/JobContext';
import { createJob } from '../services/jobs';

export default function Progress() {
  const { getCurrentUser } = useUserContext();
  const { setStatus } = useJobContext();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const setUpdatedUser = async () => {
      await getCurrentUser();
    };
    setUpdatedUser();
  }, []);

  const jobInfo = {
    position: '',
    company: '',
    description: '',
    notes: '',
    status: 'Saved',
  };

  const updateStateFromModal = (newJob) => {
    setStatus((prev) => {
      const newState = { ...prev };
      const { status } = newJob;
      newState[status].list = [...prev[status].list, newJob];
      return newState;
    });
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 1.5,
        }}
      >
        <CustomButton
          sx={{ height: '50px' }}
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Create
        </CustomButton>
      </Box>
      <ModalForm
        open={open}
        handleClose={handleClose}
        crudAction={createJob}
        stateAction={updateStateFromModal}
        initialState={jobInfo}
      />
      <Grid sx={{ padding: 1.5, marginBottom: '80px' }} container spacing={2}>
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
