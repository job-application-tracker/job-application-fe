import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/userContext';
import { JobProvider } from './context/JobContext';
import { ModeProvider } from './context/ModeContext';

render(
  <React.StrictMode>
    <UserProvider>
      <JobProvider>
        <ModeProvider>
          <Router>
            <App />
          </Router>
        </ModeProvider>
      </JobProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
