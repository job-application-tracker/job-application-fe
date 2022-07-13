import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import theme from './utils/theme';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
