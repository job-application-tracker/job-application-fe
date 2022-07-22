import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { fetchSumAchievements } from '../services/achievements';

export default function Graph() {
  const [data, setData] = useState([]);

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
        margin={{ top: 5, right: 90, left: 20, bottom: 25 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Line
          type="monotone"
          dataKey="appNum"
          stroke="#f98600"
          name="applications"
        />
        <Line
          type="monotone"
          dataKey="networkNum"
          stroke="#0085ff"
          name="networking"
        />
        <Line
          type="monotone"
          dataKey="meetupNum"
          stroke="#00ba34"
          name="meetups"
        />
        <Line
          type="monotone"
          dataKey="linkedinNum"
          stroke="#64fc"
          name="linkedin connections"
        />
        <XAxis
          dataKey="week"
          label={{
            value: 'Week of the Year',
            position: 'bottom',
            stroke: '#586F7C',
          }}
        />
        <YAxis />
        <Legend verticalAlign="top" />
      </LineChart>
    </Container>
  );
}
