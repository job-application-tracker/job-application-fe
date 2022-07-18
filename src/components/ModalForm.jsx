import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import useForm from '../hooks/useForm';
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
  id,
}) {
  const { handleChange, formState } = useForm(initialState);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const data = await crudAction(formState, id);
      stateAction(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <StyledModal open={open} onClose={handleClose}>
      <Box
        width={600}
        height={800}
        sx={{
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '10px',
        }}
      >
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
          <InputLabel id="status">Status</InputLabel>
          <Select
            id="status"
            name="status"
            label="Status"
            defaultValue="Saved"
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
          <Button>Save</Button>
          {error && <Typography>{error}</Typography>}
        </Box>
      </Box>
    </StyledModal>
  );
}
