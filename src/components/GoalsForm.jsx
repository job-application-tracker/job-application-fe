import {
  Box,
  Button,
  Container,
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

export default function GoalsForm() {
  //TODO: autofill values from user table response, css, accessibility
  return (
    <Container>
      <Box component="form">
        <Typography>Set your target weekly goals.</Typography>

        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <FeedIcon />
            </ListItemAvatar>
            <ListItemText
              primary="How many applications do you plan to submit?"
              secondary={
                <>
                  <TextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    /* TODO: add accessibility arrows, labels, etc */
                  />
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <FeedIcon />
            </ListItemAvatar>
            <ListItemText
              primary="How many networking chats do you plan to have?"
              secondary={
                <>
                  <TextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    /* TODO: add accessibility arrows, labels, etc */
                  />
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <FeedIcon />
            </ListItemAvatar>
            <ListItemText
              primary="How many meetups do you plan to attend?"
              secondary={
                <>
                  <TextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    /* TODO: add accessibility arrows, labels, etc */
                  />
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <FeedIcon />
            </ListItemAvatar>
            <ListItemText
              primary="How many new LinkedIn connections do you plan to make?"
              secondary={
                <>
                  <TextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    /* TODO: add accessibility arrows, labels, etc */
                  />
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <FeedIcon />
            </ListItemAvatar>
            <ListItemText
              primary="How many hours do you plan to work on code?"
              secondary={
                <>
                  <TextField
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    /* TODO: add accessibility arrows, labels, etc */
                  />
                </>
              }
            />
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
