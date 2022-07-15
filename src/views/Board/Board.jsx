import React, { useState } from 'react';
import { useJobContext } from '../../context/JobContext';
import Column from '../../components/Column/Column';
import { Grid } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';

export default function Board() {
  const [error, setError] = useState('');
  const { status, loadingStatus, setStatus } = useJobContext();
  const onDragEnd = ({ source, destination }) => {
    if (destination === undefined || destination === null) return null;

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    const start = status[source.droppableId];
    const end = status[destination.droppableId];
    try {
      setError('');
      if (start === end) {
        const newList = list.filter((item, i) => i !== source.index);
        newList.splice(destination.index, 0, start.list[source.index]);
        const newCol = {
          id: start.id,
          list: newList,
        };
        setStatus((state) => ({ ...state, [newCol.id]: newCol }));
        return null;
      } else {
        const newStartList = start.list.filter((item, i) => i !== source.index);

        const newStartCol = {
          id: start.id,
          list: newStartList,
        };

        // Make a new end list array
        const newEndList = end.list;

        // Insert the item into the end list
        newEndList.splice(destination.index, 0, start.list[source.index]);

        // Create a new end column
        const newEndCol = {
          id: end.id,
          list: newEndList,
        };

        // Update the state
        setStatus((prev) => ({
          ...prev,
          [newStartCol.id]: newStartCol,
          [newEndCol.id]: newEndCol,
        }));
        return null;
      }
    } catch (e) {
      setError(e.message);
      console.error(e);
      return null;
    }
  };
  if (loadingStatus) return <div>loader</div>;
  return (
    <Grid>
      {' '}
      // TODO: replace with toast notif
      {error && <p>{error}</p>}
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.values(status).map(({ id, list }, i) => (
          <Column key={i} {...{ id, list }} />
        ))}
      </DragDropContext>
    </Grid>
  );
}
