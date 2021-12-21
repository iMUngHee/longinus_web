import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: fixed;
  left: 25rem;
  top: 20rem;
`;


const Title = styled.h1`
  font-size: 4rem;
`;

const SubTitle = styled.h3``;

const Description = styled.p``;

const Home = () => {
  return (
    <>
      <Container>
        <Title>I'm Unghee Lee.</Title>
        <SubTitle>Ajou Univ.</SubTitle>
        <Description>NanuYo Oppaga JongheunGirl~</Description>
      </Container>
    </>
  );
};

export default Home;
