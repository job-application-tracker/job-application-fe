import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useUserContext } from '../context/userContext';
import { getAchievementsByWeek } from '../services/achievements';
import DisplayPercentComplete from './DisplayPercentComplete';

function Sidebar() {
  const [achieved, setAchieved] = useState({});
  const { currentUser } = useUserContext();

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

  return (
    <Container maxWidth="xs">
      <Typography component="h3">Applications</Typography>
      <DisplayPercentComplete
        complete={achieved.appNum}
        total={currentUser.appGoal}
      />
      <Typography component="h3">Networking</Typography>
      <DisplayPercentComplete
        complete={achieved.networkNum}
        total={currentUser.networkGoal}
      />
      <Typography component="h3">Meetups</Typography>
      <DisplayPercentComplete
        complete={achieved.meetupNum}
        total={currentUser.meetupGoal}
      />
      <Typography component="h3">LinkedIn connections</Typography>
      <DisplayPercentComplete
        complete={achieved.linkedinNum}
        total={currentUser.linkedinGoal}
      />
      <Typography component="h3">Coding Hours</Typography>
      <DisplayPercentComplete
        complete={achieved.codeNum}
        total={currentUser.codeGoal}
      />
    </Container>
  );
}

export default Sidebar;
