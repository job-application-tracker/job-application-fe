import React from 'react';
import { useJobContext } from '../../context/JobContext';
import Column from '../../components/Column/Column';

export default function Board() {
  const { status, loadingStatus } = useJobContext();
  if (loadingStatus) return <div>loader</div>;
  return (
    <div>
      {' '}
      {Object.values(status).map(({ id, list }, i) => (
        <Column key={i} {...{ id, list }} />
      ))}
    </div>
  );
}
