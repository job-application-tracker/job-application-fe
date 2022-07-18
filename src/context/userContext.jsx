import { useEffect, useState, createContext, useContext } from 'react';
import { getCurrentGoals, getUser, signOut } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const defaultValue = { email: null };
  const [currentUser, setCurrentUser] = useState(defaultValue);
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    if (activeStep <= 2) setActiveStep((prevStep) => prevStep + 1);
  };

  const logOut = async () => {
    await signOut();
    setCurrentUser(defaultValue);
    setActiveStep(0);
  };

  const getCurrentUser = async () => {
    const data = await getCurrentGoals();
    setCurrentUser(data);
  };

  const acquireUser = async () => {
    const data = await getUser();
    setCurrentUser(data);
    return data;
  };

  useEffect(() => {
    try {
      acquireUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        acquireUser,
        logOut,
        activeStep,
        nextStep,
        getCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const data = useContext(UserContext);
  if (data === undefined)
    throw new Error('UserContext must be wrapped in a provider');
  return data;
};

export { UserProvider, useUserContext, UserContext };
