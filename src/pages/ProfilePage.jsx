import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUsers } from '../context/UsersContextProvider';

const ProfilePage = () => {
  const { id } = useParams();

  const { getProductDetails, userDetails } = useUsers();

  useEffect(() => {
    getProductDetails(id)
  }, [])

  
  return (
    <div>

    </div>
  );
};

export default ProfilePage;