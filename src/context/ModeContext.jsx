import { createTheme } from '@mui/material';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);

  let toggle;

  const changeMode = () => {
    setMode(!mode);
    if (mode === true) {
      toggle = 'light';
    } else {
      toggle = 'dark';
    }
  };

  return (
    <ModeContext.Provider value={{ changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};

const useModeContext = () => {
  const data = useContext(ModeContext);
  if (data === undefined)
    throw new Error('ModeContext must be wrapped in a provider');
  return data;
};

export { ModeProvider, useModeContext, ModeContext };
