import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  border-radius: 4rem;
  width: 5rem;
  height: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${({theme}) => theme.colorGray};
  color: ${({theme}) => theme.primary};
  cursor: pointer;
`

const TagButton = () => {
  return (
    <Button>
      알고리즘
    </Button>
  );
};

export default TagButton;