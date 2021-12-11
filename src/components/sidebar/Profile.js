import React from 'react';
import styled from 'styled-components';
import Image from '../../img/profile.jpg';

const Container = styled.div`
  margin-top: 5rem;

`;

const ProfileImg = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
`;

const ProfileName = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme}) => theme.textColor};
`;

const Profile = () => {
  return (
    <Container>
      <ProfileImg src={Image}/>
      <ProfileName>Unghee Lee</ProfileName>
    </Container>
  );
};

export default Profile;