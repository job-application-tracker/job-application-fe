import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Job from '../Job/Job';

export default function Column({ id, list }) {
  return (
    <Box>
      <Typography variant="h4">{id}</Typography>
      <Droppable droppableId={id}>
        {(provided) => (
          <Stack {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((job, index) => (
              <Job key={index} index={index} {...{ job }} />
            ))}
            {provided.placeholder}
          </Stack>
        )}
      </Droppable>
    </Box>
  );
}
