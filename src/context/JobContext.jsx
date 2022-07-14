import { createContext, useState, useContext, useEffect } from 'react';
import { fetchJobs } from '../services/jobs';
import { useUserContext } from './userContext';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const {
    currentUser: { email },
  } = useUserContext();
  const [status, setStatus] = useState({
    Saved: {},
    Applied: {},
    Interviewing: {},
    Accepted: {},
    Ghosted: {},
    Rejected: {},
  });

  useEffect(() => {
    const getJobs = async () => {
      //fetch job data
      const data = await fetchJobs();
      //create a new object to fill our information with
      const newData = {};
      //loop over each status and fill with correct items
      for (const key in status) {
        const list = data.filter((job) => job.status === key);
        newData[key] = {
          id: key,
          list: list,
        };
      }
      //set status to new state
      setStatus(newData);
    };
    //only getJobs if user is logged in
    email && getJobs();
  }, [email]);
  const value = { status };

  return <JobContext.Provider value={value}> {children} </JobContext.Provider>;
};

export const useJobContext = () => {
  const context = useContext(JobContext);

  if (context === undefined) {
    throw new Error('useJobContext must be used within JobProvider');
  }

  return context;
};
