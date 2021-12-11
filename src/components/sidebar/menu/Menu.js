import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
/**
 * React-Icon
 */
import { FiHome } from "react-icons/fi";
import { BsBox } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { SiApache } from "react-icons/si";

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Menu = () => {
  return (
    <Container>
      <MenuItem title="Home" icon={<FiHome />} />
      <MenuItem title="Portfolio" icon={<BsBox />} active />
      <MenuItem title="Post" icon={<HiOutlinePencil />} />
      <MenuItem title="Review" icon={<SiApache />} />
    </Container>
  );
};

export default Menu;
