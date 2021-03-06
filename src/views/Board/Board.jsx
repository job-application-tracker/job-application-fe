import React, { useState } from 'react';
import { useJobContext } from '../../context/JobContext';
import Column from '../../components/Column/Column';
import { Box, Grid, Typography } from '@mui/material';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateJob } from '../../services/jobs';

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
        const newList = start.list.filter((item, i) => i !== source.index);
        newList.splice(destination.index, 0, start.list[source.index]);
        const newCol = {
          id: start.id,
          list: newList,
        };
        setStatus((state) => ({ ...state, [newCol.id]: newCol }));
        return null;
      } else {
        //filter out the item
        const newStartList = start.list.filter((item, i) => i !== source.index);
        const newStartCol = {
          id: start.id,
          list: newStartList,
        };

        // Make a new end list array
        const newEndList = end.list;
        const newJob = {
          ...start.list[source.index],
          status: end.id,
        };

        // Insert the item into the end list
        newEndList.splice(destination.index, 0, newJob);

        // Create a new end column
        const newEndCol = {
          id: end.id,
          list: newEndList,
        };
        setStatus((prev) => {
          return {
            ...prev,
            [newStartCol.id]: newStartCol,
            [newEndCol.id]: newEndCol,
          };
        });
        await updateJob(newJob.id, newJob);
        return null;
      }
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  if (loadingStatus) return <div>loader</div>;
  return (
    <>
      {error && <p>{error}</p>}
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid
          container
          spacing={2}
          minHeight="100vh"
          sx={{
            alignItems: 'stretch',
            justifyContent: 'space-evenly',
          }}
        >
          <Grid item md={3} minHeight="100vh">
            <Typography textAlign="center" variant="h4">
              Saved
            </Typography>
            <Box
              sx={{
                overflowY: 'auto',
                minHeight: '100vh',
                bgcolor: 'common.background',
                boxShadow: 5,
                borderRadius: 2,
                p: 2,
              }}
            >
              <Column id={'Saved'} list={status['Saved'].list} />
            </Box>
          </Grid>
          <Grid item md={3} minHeight="100vh">
            <Typography textAlign="center" variant="h4">
              Applied
            </Typography>
            <Box
              sx={{
                overflowY: 'auto',
                minHeight: '100vh',
                bgcolor: 'common.background',
                boxShadow: 5,
                borderRadius: 2,
                p: 2,
              }}
            >
              <Column id={'Applied'} list={status['Applied'].list} />
            </Box>
          </Grid>
          <Grid item md={3} minHeight="100vh">
            <Typography textAlign="center" variant="h4">
              Interviewing
            </Typography>
            <Box
              sx={{
                minHeight: '100vh',
                overflowY: 'auto',
                bgcolor: 'common.background',
                boxShadow: 5,
                borderRadius: 2,
                p: 2,
              }}
            >
              <Column id={'Interviewing'} list={status['Interviewing'].list} />
            </Box>
          </Grid>
          {/* nested grid starts here */}
          <Grid item md={3}>
            <Grid
              minHeight="100vh"
              container
              direction={'column'}
              justifyContent="space-around"
              alignItems="stretch"
              spacing={5}
              sx={{ marginRight: '10px' }}
            >
              <Grid item md={4}>
                <Typography textAlign="center" variant="h4">
                  Accepted
                </Typography>
                <Box
                  sx={{
                    height: '33.33%',
                    overflowY: 'auto',
                    bgcolor: 'common.background',
                    boxShadow: 5,
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <Column id={'Accepted'} list={status['Accepted'].list} />
                </Box>
              </Grid>
              <Grid item md={4}>
                <Typography textAlign="center" variant="h4">
                  Ghosted
                </Typography>
                <Box
                  sx={{
                    maxHeight: '33.33%',
                    overflowY: 'auto',
                    bgcolor: 'common.background',
                    boxShadow: 5,
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <Column id={'Ghosted'} list={status['Ghosted'].list} />
                </Box>
              </Grid>
              <Grid item md={4}>
                <Typography textAlign="center" variant="h4">
                  Rejected
                </Typography>
                <Box
                  sx={{
                    height: '33.33%',
                    overflowY: 'auto',
                    bgcolor: 'common.background',
                    boxShadow: 5,
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <Column id={'Rejected'} list={status['Rejected'].list} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DragDropContext>
    </>
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
