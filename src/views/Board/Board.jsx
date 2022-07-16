import React, { useState } from 'react';
import { useJobContext } from '../../context/JobContext';
import Column from '../../components/Column/Column';
import { CssBaseline, Grid } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateJob } from '../../services/jobs';
import { Container } from '@mui/system';

export default function Board() {
  const [error, setError] = useState('');
  const { status, loadingStatus, setStatus } = useJobContext();

  const onDragEnd = async ({ source, destination }) => {
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
        // await updateJob(start.list[source.index], destination.index);
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
        // await updateJob(
        //   { ...start.list[source.index], status: end.id },
        //   destination.index
        // );
        setStatus((prev) => ({
          ...prev,
          [newStartCol.id]: newStartCol,
          [newEndCol.id]: newEndCol,
        }));

        return null;
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
      return null;
    }
  };
  const closedStatus = ['Accepted', 'Ghosted', 'Rejected'];
  if (loadingStatus) return <div>loader</div>;
  return (
    <Container sx={{ flex: 1 }}>
      // TODO: replace with toast notif
      {error && <p>{error}</p>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={2}>
          {Object.values(status).map(({ id, list }, i) =>
            closedStatus.includes(id) ? (
              <Grid
                key={i}
                container
                flexDirection="row"
                justifyContent="flex-end"
              >
                <Grid item xs={3}>
                  <Column {...{ id, list }} />
                </Grid>
              </Grid>
            ) : (
              <Grid minHeight="100vh" key={i} item xs={3}>
                <Column {...{ id, list }} />
              </Grid>
            )
          )}
        </Grid>
      </DragDropContext>
    </Container>
  );
}

// const manageUpdate = async (job, index) => {
//     try {
//       const jobState = status[job.status].list;
//       const jobsToUpdate = jobState.slice(index);
//       await Promise.all(
//         jobsToUpdate.map((currJob, idx) => {
//           console.log('updatedindex', idx + index);
//           return currJob.id === job.id
//             ? updateJob(job, index)
//             : updateJob(currJob, idx + index);
//         })
//       );
//     } catch (error) {
//       setError(error.message);
//       console.error(error);
//     }
//   };
