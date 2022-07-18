export const sortJobs = (jobs) => {
  const newData = {
    Saved: {
      id: 'Saved',
      list: [],
    },
    Applied: {
      id: 'Applied',
      list: [],
    },
    Interviewing: {
      id: 'Interviewing',
      list: [],
    },
    Accepted: {
      id: 'Accepted',
      list: [],
    },
    Ghosted: {
      id: 'Ghosted',
      list: [],
    },
    Rejected: {
      id: 'Rejected',
      list: [],
    },
  };
  for (const job of jobs) {
    const newObject = {
      id: job.status,
      list: [...newData[job.status].list, job],
    };
    newData[job.status] = newObject;
  }
  return newData;
};
