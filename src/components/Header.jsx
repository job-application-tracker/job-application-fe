import {
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';

import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMode } from '../context/ModeContext';
import { useUserContext } from '../context/userContext';
import { CustomButton } from './styled/CustomButton';
import { MaterialUISwitch } from './styled/ToggleDarkMode';

function Header() {
  const history = useHistory();
  const { currentUser, logOut } = useUserContext();
  const { toggleMode } = useMode();

  const handleClick = async () => {
    await logOut();
    history.push('/');
  };
  return (
    <Box sx={{ height: '80px', borderBottom: '1px black solid' }}>
      <CssBaseline />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h1">find(job)</Typography>
        {currentUser.email && (
          <CustomButton onClick={handleClick} type="submit" variant="contained">
            Logout
          </CustomButton>
        )}
        <FormGroup>
          <FormControlLabel
            control={
              <MaterialUISwitch
                onChange={toggleMode}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{ m: 1 }}
                defaultChecked
              />
            }
          />
        </FormGroup>
      </Stack>
    </Box>
  );
}

export default Header;
