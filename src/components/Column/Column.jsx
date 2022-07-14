import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Job from '../Job/Job';

export default function Column({ id, list }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div>
          <h2>{id}</h2>
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((job, index) => (
              <Job key={index} index={index} {...{ job }} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
