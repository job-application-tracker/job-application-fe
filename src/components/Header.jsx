import {
  ButtonGroup,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';

import { Box } from '@mui/system';
import React from 'react';
import { useMode } from '../context/ModeContext';
import { useHistory, useLocation } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import { CustomButton } from './styled/CustomButton';
import { MaterialUISwitch } from './styled/ToggleDarkMode';

function Header() {
  const history = useHistory();
  const location = useLocation();
  const { activeStep, currentUser, logOut } = useUserContext();
  const { toggleMode } = useMode();

  const handleClick = async () => {
    await logOut();
    history.push('/');
  };

  return (
    <Box sx={{ height: '100px', borderBottom: '1px black solid' }}>
      <CssBaseline />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Typography variant="h1" sx={{ padding: 1.5 }}>
          find.job()
        </Typography>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: 1.5,
          }}
        >
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
              label="MUI switch"
            />
          </FormGroup>
          {currentUser.email && activeStep != 1 && (
            <>
              <ButtonGroup>
                {location.pathname === '/stats' ? (
                  <CustomButton
                    variant="contained"
                    onClick={() => history.push('/progress')}
                  >
                    Tracker
                  </CustomButton>
                ) : (
                  <CustomButton
                    variant="contained"
                    onClick={() => history.push('/stats')}
                  >
                    Stats
                  </CustomButton>
                )}
                <CustomButton
                  onClick={handleClick}
                  type="submit"
                  variant="contained"
                >
                  Logout
                </CustomButton>
              </ButtonGroup>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;
