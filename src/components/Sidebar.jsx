import { Button, ButtonGroup, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useUserContext } from '../context/userContext';
import { getAchievementsByWeek } from '../services/achievements';
import DisplayPercentComplete from './DisplayPercentComplete';

function Sidebar() {
  const { currentUser } = useUserContext();
  const [achieved, setAchieved] = useState({});

  useEffect(() => {
    try {
      if (!currentUser) return;
      const getData = async () => {
        const date = new Date();
        const year = date.getFullYear();
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear(), 0, 1);
        const days = Math.floor(
          (currentDate - startDate) / (24 * 60 * 60 * 1000)
        );
        const weekNumber = Math.ceil(days / 7);
        const achievements = await getAchievementsByWeek(year, weekNumber);
        setAchieved(achievements);
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [currentUser]);

  console.log('achieved', achieved);

  const handleButtonClick = async (achType, value) => {
    if (value < 0 && achieved[achType] === 0) return;
    const update = achieved[achType] + value;
    const newObj = { ...achieved };
    newObj[achType] = update;
    // call backend
    setAchieved(newObj);
  };

  return (
    <Container maxWidth="xs">
      <Typography component="h3">Applications</Typography>
      <DisplayPercentComplete
        complete={achieved.appNum}
        total={currentUser.appGoal}
      />
      <ButtonGroup variant="contained">
        <Button onClick={() => handleButtonClick('appNum', -1)}>-</Button>
        <Button onClick={() => handleButtonClick('appNum', 1)}>+</Button>
      </ButtonGroup>
      <Typography component="h3">Networking</Typography>
      <DisplayPercentComplete
        complete={achieved.networkNum}
        total={currentUser.networkGoal}
      />
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
      <DisplayPercentComplete
        complete={achieved.linkedinNum}
        total={currentUser.linkedinGoal}
      />
      <ButtonGroup variant="contained">
        <Button onClick={() => handleButtonClick('linkedinNum', -1)}>-</Button>
        <Button onClick={() => handleButtonClick('linkedinNum', 1)}>+</Button>
      </ButtonGroup>
      <Typography component="h3">Coding Hours</Typography>
      <DisplayPercentComplete
        complete={achieved.codeNum}
        total={currentUser.codeGoal}
      />
      <ButtonGroup variant="contained">
        <Button onClick={() => handleButtonClick('codeNum', -1)}>-</Button>
        <Button onClick={() => handleButtonClick('codeNum', 1)}>+</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Sidebar;
