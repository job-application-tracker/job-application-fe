import { Button, ButtonGroup, Container, Typography, Box } from '@mui/material';
import ProgressBar from '@ramonak/react-progress-bar';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMode } from '../context/ModeContext';
import { useUserContext } from '../context/userContext';
import {
  getAchievementsByWeek,
  updateAchievements,
} from '../services/achievements';
import { calculatePercent } from '../utils/percent';

function Sidebar() {
  const { currentUser } = useUserContext();
  const [achieved, setAchieved] = useState({});
  const [loadingGoals, setLoadingGoals] = useState(true);
  const { theme } = useMode();

  //calculating the current week
  const date = new Date();
  const year = date.getFullYear();
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);

  useEffect(() => {
    try {
      if (currentUser.email !== null) {
        const getData = async () => {
          const achievements = await getAchievementsByWeek(year, weekNumber);
          setAchieved(achievements);
          setLoadingGoals(false);
        };
        getData();
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleButtonClick = async (achType, value) => {
    try {
      if (value < 0 && achieved[achType] === 0) return;
      const update = achieved[achType] + value;
      const newObj = { ...achieved };
      newObj[achType] = update;
      updateAchievements(year, weekNumber, newObj);
      setAchieved(newObj);
    } catch (e) {
      console.log(e.message);
    }
  };

  if (loadingGoals) return <p>Loading...</p>;

  return (
    <>
      <Typography textAlign="center" variant="h4">
        Weekly Goals
      </Typography>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          maxWidth: '100%',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5">Applications</Typography>
        <Typography variant="p">
          {achieved.appNum}/{currentUser.appGoal}
        </Typography>
        <ProgressBar
          completed={calculatePercent(achieved.appNum, currentUser.appGoal)}
          bgColor={theme.palette.primary.light}
          labelAlignment="left"
          labelColor="#000000"
        />
        <ButtonGroup sx={{ margin: '10px 0' }} variant="contained">
          <Button onClick={() => handleButtonClick('appNum', -1)}>-</Button>
          <Button onClick={() => handleButtonClick('appNum', 1)}>+</Button>
        </ButtonGroup>
        <Typography variant="h5">Networking</Typography>
        <Typography variant="p">
          {achieved.networkNum}/{currentUser.networkGoal}
        </Typography>
        <ProgressBar
          completed={calculatePercent(
            achieved.networkNum,
            currentUser.networkGoal
          )}
          bgColor={theme.palette.primary.light}
          labelAlignment="left"
          labelColor="#000000"
        />
        <ButtonGroup sx={{ margin: '10px 0' }} variant="contained">
          <Button onClick={() => handleButtonClick('networkNum', -1)}>-</Button>
          <Button onClick={() => handleButtonClick('networkNum', 1)}>+</Button>
        </ButtonGroup>
        <Typography variant="h5">Meetups</Typography>
        <Typography variant="p">
          {achieved.meetupNum}/{currentUser.meetupGoal}
        </Typography>
        <ProgressBar
          completed={calculatePercent(
            achieved.meetupNum,
            currentUser.meetupGoal
          )}
          bgColor={theme.palette.primary.light}
          labelAlignment="left"
          labelColor="#000000"
        />
        <ButtonGroup sx={{ margin: '10px 0' }} variant="contained">
          <Button onClick={() => handleButtonClick('meetupNum', -1)}>-</Button>
          <Button onClick={() => handleButtonClick('meetupNum', 1)}>+</Button>
        </ButtonGroup>
        <Typography variant="h5">LinkedIn connections</Typography>
        <Typography variant="p">
          {achieved.linkedinNum}/{currentUser.linkedinGoal}
        </Typography>
        <ProgressBar
          completed={calculatePercent(
            achieved.linkedinNum,
            currentUser.linkedinGoal
          )}
          bgColor={theme.palette.primary.light}
          labelAlignment="left"
          labelColor="#000000"
        />
        <ButtonGroup sx={{ margin: '10px 0' }} variant="contained">
          <Button onClick={() => handleButtonClick('linkedinNum', -1)}>
            -
          </Button>
          <Button onClick={() => handleButtonClick('linkedinNum', 1)}>+</Button>
        </ButtonGroup>
        <Typography variant="h5">Coding Hours</Typography>
        <Typography variant="p">
          {achieved.codeNum}/{currentUser.codeGoal}
        </Typography>
        <ProgressBar
          completed={calculatePercent(achieved.codeNum, currentUser.codeGoal)}
          bgColor={theme.palette.primary.light}
          labelAlignment="left"
          labelColor="#000000"
        />
        <ButtonGroup sx={{ margin: '10px 0' }} variant="contained">
          <Button onClick={() => handleButtonClick('codeNum', -1)}>-</Button>
          <Button onClick={() => handleButtonClick('codeNum', 1)}>+</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default Sidebar;
