import { Box, Typography } from '@mui/material';
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
  }, []);

  console.log('achieved', achieved);

  return (
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
      <DisplayPercentComplete
        complete={achieved.appNum}
        total={currentUser.appGoal}
      />
      <Typography variant="h5">Networking</Typography>
      <DisplayPercentComplete
        complete={achieved.networkNum}
        total={currentUser.networkGoal}
      />
      <Typography variant="h5">Meetups</Typography>
      <DisplayPercentComplete
        complete={achieved.meetupNum}
        total={currentUser.meetupGoal}
        variant="h5"
      />
      <Typography variant="h5">LinkedIn connections</Typography>
      <DisplayPercentComplete
        complete={achieved.linkedinNum}
        total={currentUser.linkedinGoal}
      />
      <Typography variant="h5">Coding Hours</Typography>
      <DisplayPercentComplete
        complete={achieved.codeNum}
        total={currentUser.codeGoal}
      />
    </Box>
  );
}

export default Sidebar;
