import { createTheme } from '@mui/material';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => setLightMode(!lightMode);

  const theme = createTheme({
    palette: {
      mode: lightMode ? 'light' : 'dark',
      common: {
        background: lightMode ? '#fff' : '#1E1E1E',
        color: lightMode ? '#1E1E1E' : '#EAEAEA',
        // background: lightMode ? '#fff' : '#000',
        // color: lightMode ? '#000' : '#fff',
      },
      primary: {
        main: '#586F7C',
        light: '#b8dbd9',
        dark: '#2F4550',
        card: lightMode ? '#b8dbd9' : '#2F4550',
      },
    },
    typography: {
      fontFamily: "'Oswald', sans-serif",
      h1: {
        fontFamily: "'Fauna One', serif",
        fontWeight: 400,
        fontSize: '4rem',
      },
      h2: {
        fontFamily: "'Josefin Sans', sans-serif",
      },
      h3: {
        fontFamily: "'Josefin Sans', sans-serif",
      },
      h4: {
        fontFamily: "'Josefin Sans', sans-serif",
      },
      h5: {
        fontFamily: "'Josefin Sans', sans-serif",
      },
      h6: {
        fontFamily: "'Josefin Sans', sans-serif",
      },
    },
    // shadows: [
    //   'none',
    //   '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
    // ],
  });

  return (
    <ModeContext.Provider value={{ toggleMode, lightMode, theme }}>
      {children}
    </ModeContext.Provider>
  );
};

const useMode = () => {
  const data = useContext(ModeContext);
  if (data === undefined)
    throw new Error('ModeContext must be wrapped in a provider');
  return data;
};

export { ModeProvider, useMode, ModeContext };
