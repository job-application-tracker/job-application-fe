import { createContext, useState, useContext, useEffect } from 'react';
import { fetchJobs } from '../services/jobs';
import { sortJobs } from '../utils/jobs';
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
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      const jobData = await fetchJobs();
      const formatted = sortJobs(jobData);
      setStatus(formatted);

      setLoadingStatus(false);
    };
    email && getJobs();
  }, [email]);
  const value = { status, loadingStatus, setStatus };
  return <JobContext.Provider value={value}> {children} </JobContext.Provider>;
};

export const useJobContext = () => {
  const context = useContext(JobContext);

  if (context === undefined) {
    throw new Error('useJobContext must be used within JobProvider');
  }

  return context;
};
