import React from "react";
import styled from "styled-components";
import Image from "../../assets/img/profile.jpg";
import { MdOutlineMail } from "react-icons/md";
import { GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { useState } from "react/cjs/react.development";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  li, a {
    transition: all 0.6s 0.1s;
  }
  &.active li:nth-child(2) {
    transform: translateY(3rem);
    a:hover {
      color: #fdb85d;
    }
  }
  &.active li:nth-child(3) {
    transform: translateY(5rem);
    :hover {
      color: #ea6ff5;
    }
  }
  &.active li:nth-child(4) {
    transform: translateY(7rem);
    :hover {
      color: #34ff67;
    }
  }
`;

const ProfileImg = styled.img`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  height: 3rem;
  width: 3rem;
  border-radius: 70%;
  overflow: hidden;
  object-fit: cover;
  margin: 0 1rem;
  cursor: pointer;
  z-index: 11;
`;

const NavIcon = styled.li`
  color: ${({ theme }) => theme.colorGray};
  list-style: none;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  a:link {
    color: ${({ theme }) => theme.colorGray};
    text-decoration: none;
  }
  a:visited {
    color: ${({ theme }) => theme.colorGray};
    text-decoration: none;
  }
`;

const MessageIcon = styled.span`
  color: ${({ theme }) => theme.colorGray};
  height: 27px;
  font-size: 27px;
  cursor: pointer;
`;

const Nav = () => {
  const [active, setActive] = useState(false);
  const onClick = () => setActive(!active);
  return (
    <Container>
      <MessageIcon>
        <MdOutlineMail />
      </MessageIcon>
      <Menu className={active ? "active" : ""}>
        <ProfileImg src={Image} onClick={onClick} />
        <NavIcon>
          <a href="https://github.com/iMUngHee" target="_blank" rel="noopener noreferrer">
            <GrGithub />
          </a>
        </NavIcon>
        <NavIcon>
          <GrInstagram />
        </NavIcon>
        <NavIcon>
          <GrLinkedinOption />
        </NavIcon>
      </Menu>
    </Container>
  );
};

export default Nav;
