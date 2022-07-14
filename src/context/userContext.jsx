import { useEffect, useState, createContext, useContext } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const defaultValue = { email: null };
  const [currentUser, setCurrentUser] = useState(defaultValue);

  const acquireUser = async () => {
    const data = await getUser();
    setCurrentUser(data);
  };

  useEffect(() => {
    try {
      acquireUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, acquireUser }}>
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
