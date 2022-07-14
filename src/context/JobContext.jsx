import { createContext, useState, useContext, useEffect } from 'react';
import { fetchJobs } from '../services/jobs';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const data = await fetchJobs();
      console.log('data', data);
      setJobs(data);
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
