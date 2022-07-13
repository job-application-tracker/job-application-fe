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
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { signUpUser } from '../services/users';
import { useState } from 'react';

function Auth({ nextStep, signUp }) {
  const [error, setError] = useState('');
  const { formState, handleChange, clearForm } = useForm({
    email: '',
    password: '',
  });
  const authType = signUp ? 'Sign Up' : 'Sign In';
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        <MuiLink color="inherit" href="https://mui.com/">
          JOBS.find()
        </MuiLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (signUp) {
        await signUpUser(formState);
        nextStep();
      }
    } catch (error) {
      setError(error.message);
    }
    clearForm();
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
          <Grid container>
            <Grid item>
              <Typography color={'error'} variant="subtitle2">
                {error}
              </Typography>
            </Grid>
            <Grid item>
              <Link to={signUp ? `/signIn` : `/`} variant="body2">
                {signUp
                  ? `Already have an account? Sign In`
                  : "Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default Auth;
