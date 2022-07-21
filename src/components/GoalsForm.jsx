import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import FeedIcon from '@mui/icons-material/Feed';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useUserContext } from '../context/userContext';
import useForm from '../hooks/useForm';
import { useState } from 'react';
import { userGoalsUpdate } from '../services/users';
import { useHistory } from 'react-router-dom';

export default function GoalsForm() {
  const { currentUser, nextStep } = useUserContext();
  const { formState, handleChange } = useForm({
    appGoal: currentUser.appGoal,
    networkGoal: currentUser.networkGoal,
    meetupGoal: currentUser.meetupGoal,
    linkedinGoal: currentUser.linkedinGoal,
    codeGoal: currentUser.codeGoal,
  });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const goals = {
        appGoal: formState.appGoal,
        networkGoal: formState.networkGoal,
        meetupGoal: formState.meetupGoal,
        linkedinGoal: formState.linkedinGoal,
        codeGoal: formState.codeGoal,
      };
      await userGoalsUpdate(currentUser.id, goals);
      nextStep();
      history.push('/progress');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <Container>
      <CssBaseline />
      <Box component="form" onSubmit={handleSubmit}>
        <Typography textAlign={'center'} component="h2" variant="h6">
          Set your target weekly goals.
        </Typography>

        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <FeedIcon />
            </ListItemAvatar>
            <Box>
              <ListItemText primary="How many applications do you plan to submit?" />
              <TextField
                required
                value={formState.appGoal}
                onChange={handleChange}
                id="appGoal"
                label="applications goal"
                name="appGoal"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <ContactPhoneRoundedIcon />
            </ListItemAvatar>
            <Box>
              <ListItemText primary="How many networking chats do you plan to have?" />

              <TextField
                required
                value={formState.networkGoal}
                onChange={handleChange}
                id="networkGoal"
                label="networking goal"
                name="networkGoal"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <GroupsRoundedIcon />
            </ListItemAvatar>
            <Box>
              <ListItemText primary="How many meetups do you plan to attend?" />

              <TextField
                required
                value={formState.meetupGoal}
                onChange={handleChange}
                id="meetupGoal"
                label="meetup goal"
                name="meetupGoal"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <HandshakeIcon />
            </ListItemAvatar>
            <Box>
              <ListItemText primary="How many new LinkedIn connections do you plan to make?" />

              <TextField
                required
                value={formState.linkedinGoal}
                onChange={handleChange}
                id="linkedinGoal"
                label="linkedin connections goal"
                name="linkedinGoal"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <CodeRoundedIcon />
            </ListItemAvatar>
            <Box>
              <ListItemText primary="How many hours do you plan to work on code?" />

              <TextField
                required
                value={formState.codeGoal}
                onChange={handleChange}
                id="codeGoal"
                label="coding hours goal"
                name="codeGoal"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          Save changes
        </Button>
      </Box>
    </Container>
  );
}
