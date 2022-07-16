import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useUserContext } from '../context/userContext';
import { getAchievementsByWeek } from '../services/achievements';
import DisplayPercentComplete from './DisplayPercentComplete';

function Sidebar() {
  const [achieved, setAchieved] = useState({});
  const {currentUser} = useUserContext();

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
    <div>
      <h3>Applications</h3>
      <DisplayPercentComplete complete={achieved.appNum} total={currentUser.appGoal} />
      <h3>Networking</h3>
      <DisplayPercentComplete complete={achieved.networkNum} total={currentUser.networkGoal} />
      <h3>Meetups</h3>
      <DisplayPercentComplete complete={achieved.meetupNum} total={currentUser.meetupGoal} />
      <h3>LinkedIn connections</h3>
      <DisplayPercentComplete complete={achieved.linkedinNum} total={currentUser.linkedinGoal} />
      <h3>Coding Hours</h3>
      <DisplayPercentComplete complete={achieved.codeNum} total={currentUser.codeGoal} />
    </div>
  );
}

export default Sidebar;
