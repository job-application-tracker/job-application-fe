<<<<<<< HEAD
import { Box, Typography } from '@mui/material';
=======
import { Button, ButtonGroup, Container, Typography } from '@mui/material';
>>>>>>> c55b157aaef63a8e861e62b0d08b4482e379cc8a
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useUserContext } from '../context/userContext';
import {
  getAchievementsByWeek,
  updateAchievements,
} from '../services/achievements';
import DisplayPercentComplete from './DisplayPercentComplete';

function Sidebar() {
  const { currentUser } = useUserContext();
  const [achieved, setAchieved] = useState({});
<<<<<<< HEAD
  const { currentUser } = useUserContext();
=======

  //calculating the current week
  const date = new Date();
  const year = date.getFullYear();
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);
>>>>>>> c55b157aaef63a8e861e62b0d08b4482e379cc8a

  useEffect(() => {
    try {
      if (currentUser.email !== null) {
        const getData = async () => {
          const achievements = await getAchievementsByWeek(year, weekNumber);
          setAchieved(achievements);
        };
        getData();
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  console.log('achieved', achieved);

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

  return (
<<<<<<< HEAD
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        maxWidth: '100%',
      }}
    >
      <Typography variant="h5">Applications</Typography>
=======
    <Container maxWidth="xs">
      <Typography component="h3">Applications</Typography>
>>>>>>> c55b157aaef63a8e861e62b0d08b4482e379cc8a
      <DisplayPercentComplete
        complete={achieved.appNum}
        total={currentUser.appGoal}
      />
<<<<<<< HEAD
      <Typography variant="h5">Networking</Typography>
=======
      <ButtonGroup variant="contained">
        <Button onClick={() => handleButtonClick('appNum', -1)}>-</Button>
        <Button onClick={() => handleButtonClick('appNum', 1)}>+</Button>
      </ButtonGroup>
      <Typography component="h3">Networking</Typography>
>>>>>>> c55b157aaef63a8e861e62b0d08b4482e379cc8a
      <DisplayPercentComplete
        complete={achieved.networkNum}
        total={currentUser.networkGoal}
      />
<<<<<<< HEAD
      <Typography variant="h5">Meetups</Typography>
      <DisplayPercentComplete
        complete={achieved.meetupNum}
        total={currentUser.meetupGoal}
        variant="h5"
      />
      <Typography variant="h5">LinkedIn connections</Typography>
=======
      <ButtonGroup variant="contained">
        <Button onClick={() => handleButtonClick('networkNum', -1)}>-</Button>
        <Button onClick={() => handleButtonClick('networkNum', 1)}>+</Button>
      </ButtonGroup>
      <Typography component="h3">Meetups</Typography>
      <DisplayPercentComplete
        complete={achieved.meetupNum}
        total={currentUser.meetupGoal}
      />
      <ButtonGroup variant="contained">
        <Button onClick={() => handleButtonClick('meetupNum', -1)}>-</Button>
        <Button onClick={() => handleButtonClick('meetupNum', 1)}>+</Button>
      </ButtonGroup>
      <Typography component="h3">LinkedIn connections</Typography>
>>>>>>> c55b157aaef63a8e861e62b0d08b4482e379cc8a
      <DisplayPercentComplete
        complete={achieved.linkedinNum}
        total={currentUser.linkedinGoal}
      />
<<<<<<< HEAD
      <Typography variant="h5">Coding Hours</Typography>
=======
      <ButtonGroup variant="contained">
        <Button onClick={() => handleButtonClick('linkedinNum', -1)}>-</Button>
        <Button onClick={() => handleButtonClick('linkedinNum', 1)}>+</Button>
      </ButtonGroup>
      <Typography component="h3">Coding Hours</Typography>
>>>>>>> c55b157aaef63a8e861e62b0d08b4482e379cc8a
      <DisplayPercentComplete
        complete={achieved.codeNum}
        total={currentUser.codeGoal}
      />
<<<<<<< HEAD
    </Box>
=======
      <ButtonGroup variant="contained">
        <Button onClick={() => handleButtonClick('codeNum', -1)}>-</Button>
        <Button onClick={() => handleButtonClick('codeNum', 1)}>+</Button>
      </ButtonGroup>
    </Container>
>>>>>>> c55b157aaef63a8e861e62b0d08b4482e379cc8a
  );
}

export default Sidebar;
