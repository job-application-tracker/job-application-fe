import React, { useEffect } from 'react';
import { useUserContext } from '../context/userContext';

export default function Progress() {
  const { getCurrentUser } = useUserContext();
  useEffect(() => {
    const setUpdatedUser = async () => {
      const data = await getCurrentUser();
    };

    setUpdatedUser();
  }, []);

  return <div>Progress</div>;
}
