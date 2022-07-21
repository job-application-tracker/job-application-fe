import { Card, Typography } from '@mui/material';

export default function SumCard({ type, value }) {
  return (
    <Card
      sx={{
        marginLeft: 0,
        padding: '10px',
        height: '150px',
        width: '150px',
        textAlign: 'center',
      }}
    >
      <Typography variant={'h2'}>{value}</Typography>
      <Typography variant={'h5'}>{type}</Typography>
    </Card>
  );
}
