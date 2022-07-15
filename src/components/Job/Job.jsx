import { Card } from '@mui/material';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default function Job({ job: { position, company, id }, index }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {position}
        </Card>
      )}
    </Draggable>
  );
}
