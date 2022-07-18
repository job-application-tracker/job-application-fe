import { ThemeProvider } from '@mui/material';
import { findByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { UserProvider } from '../../context/userContext';
import theme from '../../utils/theme';

describe('auth testing', () => {
  it('should be able to sign up a user, and take them to a goals form, then submit and redirect', async () => {
    render(
      <ThemeProvider theme={theme}>
        <UserProvider>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </UserProvider>
      </ThemeProvider>
    );
    const emailField = await screen.findByRole('textbox', {
      name: /email address/i,
    });
    const passwordField = await screen.findByPlaceholderText(/password/i);
    userEvent.type(emailField, 'example@test.com');
    userEvent.type(passwordField, 'password');

    const signUp = await screen.findByRole('button', { name: /sign up/i });

    userEvent.click(signUp);
    // const h1 = await screen.findByText(/set your target weekly goals/i);
    // screen.debug();
  });
});
