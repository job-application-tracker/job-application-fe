import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import theme from './utils/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import { JobProvider } from './context/JobContext';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <JobProvider>
          <Router>
            <App />
          </Router>
        </JobProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
