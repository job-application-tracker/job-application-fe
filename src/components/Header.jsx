import { CssBaseline, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import { CustomButton } from './styled/CustomButton';

function Header() {
  const history = useHistory();
  const { currentUser, logOut } = useUserContext();

  const handleClick = async () => {
    await logOut();
    history.push('/');
  };
  return (
    <Box>
      <CssBaseline />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        {currentUser.email && (
          <CustomButton onClick={handleClick} type="submit" variant="contained">
            Logout
          </CustomButton>
        )}
      </Stack>
    </Box>
  );
}

export default Header;
