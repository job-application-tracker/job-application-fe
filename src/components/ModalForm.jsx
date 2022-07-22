import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { CustomButton } from './styled/CustomButton';
const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const TextInput = ({ name, value, onChange }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    id={name}
    name={name}
    label={name}
    autoFocus
    value={value}
    onChange={onChange}
  />
);

export default function ModalForm({
  open,
  handleClose,
  crudAction,
  stateAction,
  initialState,
  editing,
  deleteAction,
}) {
  const { handleChange, formState, clearForm } = useForm(initialState);
  const [error, setError] = useState('');
  const handleDelete = async () => {
    await deleteAction();
    handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      if (formState.position === '' || formState.company === '')
        throw new Error('Please enter a position and a company.');
      const data = await crudAction(formState);
      stateAction(data);
      clearForm(data, editing);
      handleClose();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <StyledModal open={open} onClose={handleClose}>
      <Box
        padding="50px"
        width={600}
        height={800}
        sx={{
          backgroundColor: 'common.background',
          color: 'common.color',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" textAlign={'center'}>
          Add a new application
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextInput
            name="position"
            value={formState.position}
            onChange={handleChange}
          />
          <TextInput
            name="company"
            value={formState.company}
            onChange={handleChange}
          />
          <TextInput
            name="description"
            value={formState.description}
            onChange={handleChange}
          />
          <TextInput
            name="notes"
            value={formState.notes}
            onChange={handleChange}
          />
          <Grid
            container
            sx={{
              height: '300px',
              justifyContent: 'flex-end',
              alignItems: 'stretch',
              flexDirection: 'column',
            }}
          >
            <Grid md={9} item>
              {editing ? (
                <DeleteSharpIcon onClick={() => handleDelete()} />
              ) : (
                <>
                  <InputLabel sx={{ paddingTop: '30px' }} id="status">
                    Status
                  </InputLabel>
                  <Select
                    sx={{ width: '100%', height: '45px' }}
                    id="status"
                    name="status"
                    label="Status"
                    value={formState.status}
                    onChange={handleChange}
                  >
                    <MenuItem value="Saved">Saved</MenuItem>
                    <MenuItem value="Applied">Applied</MenuItem>
                    <MenuItem value="Interviewing">Interviewing</MenuItem>
                    <MenuItem value="Accepted">Accepted</MenuItem>
                    <MenuItem value="Ghosted">Ghosted</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                  </Select>
                </>
              )}
            </Grid>
            <Grid md="auto" item>
              <CustomButton
                type="submit"
                sx={{ height: '45px' }}
                variant="contained"
              >
                Save
              </CustomButton>
            </Grid>
          </Grid>
          {error && <Typography>{error}</Typography>}
        </Box>
      </Box>
    </StyledModal>
  );
}
