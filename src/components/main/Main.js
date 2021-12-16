import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pages
import HomePage from '../../pages/HomePage';
import ProjectPage from '../../pages/ProjectPage';
import PostPage from '../../pages/PostPage';
import ReviewPage from '../../pages/ReviewPage';

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 16rem);
  margin-left: 16rem;
`;

const Main = () => {
  return (
    <Container>
      {/* Rendering Pages */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* Home */}
        <Route path='/home' element={<HomePage />} />
        {/* Project */}
        <Route path='/project' element={<ProjectPage />} />
        {/* Post */}
        <Route path='/Post' element={<PostPage />} />
        {/* Review */}
        <Route path='/review' element={<ReviewPage />} />
      </Routes>
    </Container>
  );
};

export default Main;