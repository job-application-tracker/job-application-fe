import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import { JobProvider } from './context/JobContext';

render(
  <React.StrictMode>
    <UserProvider>
      <JobProvider>
        <Router>
          <App />
        </Router>
      </JobProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
