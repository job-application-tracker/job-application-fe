import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { signInUser, signUpUser } from '../../services/users';
import { useState } from 'react';
import { useUserContext } from '../../context/userContext';

function Auth({ nextStep, signUp, setSignUp }) {
  const [error, setError] = useState('');
  const history = useHistory();
  const { formState, handleChange } = useForm({
    email: '',
    password: '',
  });
  const { acquireUser } = useUserContext();
  const authType = signUp ? 'Sign Up' : 'Sign In';

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (signUp) {
        await signUpUser(formState);
        await acquireUser();
        nextStep();
      } else {
        await signInUser(formState);
        await acquireUser();
        history.push('/progress');
      }
    } catch (error) {
      formState.password = '';
      setError(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {authType}
        </Typography>
        <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formState.email}
            onChange={handleChange}
          />
          <TextField
            placeholder="password"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formState.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {authType}
          </Button>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Grid item>
              <Typography
                sx={{
                  textDecoration: 'underline',
                  color: 'secondary.main',
                  cursor: 'pointer',
                }}
                onClick={() => setSignUp(!signUp)}
                variant="body2"
              >
                {signUp
                  ? `Already have an account? Sign In`
                  : "Don't have an account? Sign Up"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography color={'error'} variant="subtitle2">
                {error}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Auth;
