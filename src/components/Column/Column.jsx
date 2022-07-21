import { Box, Stack } from '@mui/material';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Job from '../Job/Job';

export default function Column({ id, list }) {
  return (
    <Box>
      <Droppable droppableId={id}>
        {(provided) => (
          <Stack
            //MAKES THE DROP LOWER IN THE COLUMN
            sx={{ minHeight: '20vh' }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {list.map((job, index) => (
              <Job key={job.id} index={index} {...{ job }} />
            ))}
            {provided.placeholder}
          </Stack>
        )}
      </Droppable>
    </Box>
  );
}
