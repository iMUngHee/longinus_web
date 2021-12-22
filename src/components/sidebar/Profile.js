import React, { useState } from "react";
import styled from "styled-components";
import Image from "../../assets/img/profile.jpg";
import LoginForm from "../../containers/auth/LoginForm";

import { FaCrown } from "react-icons/fa";

const AdminLogo = styled.div`
  position: absolute;
  top: 1.5rem;
  font-size: 3rem;
  color: #e2e203;
`;

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
  color: ${({ theme }) => theme.textColor};
`;

const Profile = ({ admin, onLogout }) => {
  const [active, setActive] = useState(false);
  const onActive = () => {
    setActive(!active);
  };
  return (
    <>
      {admin && (
        <AdminLogo>
          <FaCrown onClick={onLogout} />
        </AdminLogo>
      )}
      <Container>
        <ProfileImg src={Image} onDoubleClick={onActive} />
        {/* <LoginForm active={active} setActive={setActive}/> */}
        {!admin && active && <LoginForm />}
        <ProfileName>Unghee Lee</ProfileName>
      </Container>
    </>
  );
};

export default Profile;
