import React from "react";
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

const MenuItem = ({ title, icon, active }) => {
  return (
    <Container active={active}>
      <Icon>{icon}</Icon>
      <Title active={active}>{title}</Title>
    </Container>
  );
};

export default MenuItem;
