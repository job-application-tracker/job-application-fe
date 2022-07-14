import { createContext, useState, useContext, useEffect } from 'react';
import { fetchJobs } from '../services/jobs';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
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
      const data = await fetchJobs();
      for (const key in status) {
        const list = data.filter((job) => job.status === key);
        status[key] = {
          id: key,
          list: list,
        };
      }
      console.log('status', status);
    };
    getJobs();
  }, []);

  const value = {};

  return <JobContext.Provider value={value}> {children} </JobContext.Provider>;
};

export const useJobContext = () => {
  const context = useContext(JobContext);

  if (context === undefined) {
    throw new Error('useJobContext must be used within JobProvider');
  }

  return context;
};
