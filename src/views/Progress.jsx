import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useUserContext } from '../context/userContext';
import Board from './Board/Board';

export default function Progress() {
  const { getCurrentUser } = useUserContext();
  useEffect(() => {
    const setUpdatedUser = async () => {
      const data = await getCurrentUser();
    };

    setUpdatedUser();
  }, []);

  return (
    <>
      <Sidebar />
      <Board />
    </>
  );
}
