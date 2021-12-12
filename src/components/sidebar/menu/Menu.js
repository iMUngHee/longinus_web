import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { MenuData } from "./MenuData";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Menu = () => {
  return (
    <Container>
      {MenuData.map((item, index) => {
        return <MenuItem item={item} key={index}  />;
      })}
    </Container>
  );
};

export default Menu;
