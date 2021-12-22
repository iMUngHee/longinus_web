import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Profile from '../../components/Sidebar/Profile';
import { logout } from '../../modules/admin';

const ProfileContainer = () => {
  const {admin} = useSelector(({admin}) => ({admin: admin.admin}));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  }
  return (
    <Profile admin={admin} onLogout={onLogout}/>
  );
};

export default ProfileContainer;