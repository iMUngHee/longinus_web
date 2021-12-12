import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pages
import AboutPage from '../../pages/Home/AboutPage';
import SkillsPage from '../../pages/Home/SkillsPage';
import ProjectPage from '../../pages/Portfolio/ProjectPage';
import AlgorithmPage from '../../pages/Post/AlgorithmPage';
import ReactPage from '../../pages/Post/ReactPage';
import BookPage from '../../pages/Review/BookPage';
import MoviePage from '../../pages/Review/MoviePage';

const Container = styled.div`

`;

const Main = () => {
  return (
    <Container>
      {/* Rendering Pages */}
      <Routes>
        <Route path='/' element={<AboutPage />} />
        {/* Home */}
        <Route path='/home' element={<AboutPage />} />
        <Route path='/home/about' element={<AboutPage />} />
        <Route path='/home/about' element={<SkillsPage />} />
        {/* Portfolio */}
        <Route path='/portfolio' element={<ProjectPage />} />
        <Route path='/portfolio/project' element={<ProjectPage />} />
        {/* Post */}
        <Route path='/Post' element={<AlgorithmPage />} />
        <Route path='/Post/algorithm' element={<AlgorithmPage />} />
        <Route path='/Post/react' element={<ReactPage />} />
        {/* Review */}
        <Route path='/review' element={<BookPage />} />
        <Route path='/review/book' element={<BookPage />} />
        <Route path='/review/movie' element={<MoviePage />} />
      </Routes>
    </Container>
  );
};

export default Main;