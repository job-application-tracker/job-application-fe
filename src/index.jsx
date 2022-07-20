import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import theme from './utils/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import { JobProvider } from './context/JobContext';
import { ModeProvider } from './context/ModeContext';

render(
  <React.StrictMode>
    <ModeProvider>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <JobProvider>
            <Router>
              <App />
            </Router>
          </JobProvider>
        </UserProvider>
      </ThemeProvider>
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
