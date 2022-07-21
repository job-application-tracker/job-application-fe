import { Container, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { useUserContext } from '../context/userContext';
import { fetchSumAchievements } from '../services/achievements';

export default function Graph() {
  const [data, setData] = useState([]);
  const { currentUser } = useUserContext();
  
  useEffect(() => {
    const getData = async () => {
      const data = await fetchSumAchievements();
      console.log('data', data);
      setData(data);
    };
    getData();
  }, []);
  return (
    <Container
      sx={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <Typography variant="h2" textAlign={'center'}>
        Your Achievements
      </Typography>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        // margin={'auto'}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="appNum" stroke="#8884d8" />
        <Line type="monotone" dataKey="networkNum" stroke="#82ca9d" />
        <Line type="monotone" dataKey="meetupNum" stroke="#021" />
        <Line type="monotone" dataKey="linkedinNum" stroke="#64fc" />
        {/* <Line type="monotone" dataKey="codeNum" stroke="#15ca" /> */}
        <XAxis dataKey="week" />
        <YAxis />
        <Legend />
        {/* <Tooltip /> */}
      </LineChart>
    </Container>
  );
}
