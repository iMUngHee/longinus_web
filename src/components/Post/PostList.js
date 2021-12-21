import React from "react";
import styled from "styled-components";
import TagButton from "./TagButton";

const Container = styled.div`
  position: relative;
  padding: 0 15rem;
`;

const PostBox = styled.div`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
`;

const Title = styled.h2`
  display: block;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0;
  margin-top: 0;
  a {
    color: ${({theme}) => theme.opposite};
    word-wrap: break-word;
    position: relative;
    border-bottom: none;
    text-decoration: none;
    text-decoration-line: none;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${({theme}) => theme.opposite};
      visibility: hidden;
      transform: scaleX(0);
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      transition-delay: 0;
    }
    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
  
`;

const SubInfo = styled.div`
  color: ${({theme}) => theme.colorGray};
  text-align: center;
  padding-top: 0.5rem;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

const PostFooter = styled.span`
  display: block;
  margin: 20px auto 0;
  text-align: center;
  width: 8%;
  height: 1px;
  background-color: #ccc;
`

const PostItem = () => {
  return (
    <PostBox>
      <Title>
        <a className="post-title-link" href="/">
          SIMD in PS - ICPC Seoul Regional 2021 L. Trio
        </a>
      </Title>
      <SubInfo>
        <span>{new Date().toLocaleDateString()}</span>
      </SubInfo>
      <Tags>
        <TagButton />
        <TagButton />
        <TagButton />
      </Tags>
      <PostFooter />
    </PostBox>
  );
};

const PostList = () => {
  return (
    <>
      <Container>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </Container>
    </>
  );
};

export default PostList;
