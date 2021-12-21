import React from 'react';
import styled from 'styled-components';
import PostList from './PostList';

const Container = styled.div`
  margin-top: 5rem;
  padding: 0 4rem;
  padding-top: 11rem;
  width: 100%;
  height: 100%;
`;

const Post = () => {
  return (
    <Container>
      <PostList />
    </Container>
  );
};

export default Post;