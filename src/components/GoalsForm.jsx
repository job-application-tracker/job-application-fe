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
//keyboard icon for possible variant
// import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { useUserContext } from '../context/userContext';

export default function GoalsForm() {
  const { currentUser } = useUserContext();
  console.log('currentUser', currentUser);
  //TODO: autofill values from user table response, css, accessibility
  return (
    <Container>
      <CssBaseline />
      <Box component="form">
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
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                /* TODO: add accessibility arrows, labels, etc */
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
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                /* TODO: add accessibility arrows, labels, etc */
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
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                /* TODO: add accessibility arrows, labels, etc */
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
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                /* TODO: add accessibility arrows, labels, etc */
              />
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <CodeRoundedIcon />
              {/* <KeyboardRoundedIcon/> */}
            </ListItemAvatar>
            <Box>
              <ListItemText primary="How many hours do you plan to work on code?" />

              <TextField
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                /* TODO: add accessibility arrows, labels, etc */
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
