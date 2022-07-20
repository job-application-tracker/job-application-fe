import { Card } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useJobContext } from '../../context/JobContext';
import { deleteJob, updateJob } from '../../services/jobs';
import ModalForm from '../ModalForm';

export default function Job({
  job: { position, company, id, description, notes, status },
  index,
}) {
  const { setStatus } = useJobContext();
  const [editing, setEditing] = useState(false);

  //TODO: SWITCH INDEX FROM HARDCODED
  //TODO: Rename this variable
  const updateJobDetails = async (formState) => {
    const updatedJob = await updateJob(id, formState, 0);
    return updatedJob;
  };

  const updateStateFromModal = (newJob) => {
    setStatus((prev) => {
      const newState = { ...prev };
      const { status } = newJob;
      newState[status].list = [
        ...prev[status].list.filter((j) => j.id !== newJob.id),
        newJob,
      ];
      return newState;
    });
  };
  const deleteAction = async () => {
    setStatus((prev) => {
      const newState = { ...prev };

      newState[status].list = prev[status].list.filter((j) => j.id !== id);
      return newState;
    });
    await deleteJob(id);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <>
          <Card
            sx={{ padding: '10px 5px', margin: '5px 0px 5px 0px ' }}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onDoubleClick={() => setEditing(true)}
          >
            {position}
          </Card>
          <ModalForm
            open={editing}
            editing
            handleClose={() => setEditing(false)}
            initialState={{ position, company, description, notes, status }}
            crudAction={updateJobDetails}
            stateAction={updateStateFromModal}
            deleteAction={deleteAction}
          />
        </>
      )}
    </Draggable>
  );
}
