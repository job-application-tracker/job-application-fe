import { useEffect, useState, createContext, useContext } from 'react';
import { getUser, signInUser, signUpUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const defaultValue = { email: null };
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState(defaultValue);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      if (currentUser !== defaultValue) {
        const acquireUser = async () => {
          const data = await getUser();
          setCurrentUser(data);
        };
        acquireUser();
      }
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const handleSubmit = async (e, formState, signUp, nextStep) => {
    try {
      e.preventDefault();
      if (signUp) {
        const data = await signUpUser(formState);
        setUser(data);
        nextStep();
      } else {
        const data = await signInUser(formState);
        setUser(data);
        history.push('/progress');
      }

    } catch (error) {
      formState.password = '';
      setError(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{ currentUser, handleSubmit, error, setError }}
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
