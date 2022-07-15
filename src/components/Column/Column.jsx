import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Job from '../Job/Job';

export default function Column({ id, list }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <Box>
          <Typography variant="h4">{id}</Typography>
          <Stack {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((job, index) => (
              <Card key={index}>
                <Job index={index} {...{ job }} />
              </Card>
            ))}
            {provided.placeholder}
          </Stack>
        </Box>
      )}
    </Droppable>
  );
}
