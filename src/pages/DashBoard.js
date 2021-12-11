import React from 'react';
import styled from 'styled-components';
import Main from '../components/main/Main';
import Sidebar from '../components/sidebar/Sidebar';

const DashBoardBlock = styled.div``;

const DashBoard = () => {
  return (
    <DashBoardBlock>
      <Sidebar />
      <Main />
    </DashBoardBlock>
  );
};

export default DashBoard;