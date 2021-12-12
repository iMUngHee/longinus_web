import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

const Container = styled.div`
  border-left: 3px solid
    ${(props) => (props.active ? props.theme.activeMenu : "transparent")};
  width: 100%;
  padding: 0.3rem;
  padding-left: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  transition: 0.2s all ease-in-out;
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.span`
  color: ${(props) => (props.active ? props.theme.textColor : "#AAA5A5")};
  font-size: 1rem;
  margin-right: 1rem;
`;

const Title = styled.h1`
  color: ${(props) => (props.active ? props.theme.textColor : "#AAA5A5")};
  font-size: 0.9rem;
`;

const DropDownIcon = styled.span`
  color: ${(props) => (props.active ? props.theme.textColor : "#AAA5A5")};
  font-size: 2rem;
  height: 2rem;
  margin: 0;
  flex: 1;
  display: flex;
  justify-content: end;
`;

const DropDown = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3rem;
  padding-left: 4rem;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;
  &:nth-child(1) {
    padding-top: 0;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
`;

const MenuItem = ({ item, active }) => {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);
  return (
    <>
      <Container
        active={active}
        onClick={item.subNav && showSubNav}
      >
        <Icon>{item.icon}</Icon>
        <Title active={active}>{item.title}</Title>
        <DropDownIcon>
          {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </DropDownIcon>
      </Container>
      {subNav && item.subNav.map((item, index) => {
        return(
          <DropDown to={item.path} key={index}>
            <Icon>
              {item.icon}
            </Icon>
            <Title>
              {item.title}
            </Title>
          </DropDown>
        )
      })}
    </>
  );
};

export default MenuItem;
