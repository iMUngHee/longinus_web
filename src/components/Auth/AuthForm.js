import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 7rem;
  left: 12rem;
  /* visibility: ${({active}) => active ? 'visible' : 'hidden'}; */
`;

const AuthBox = styled.div`
  width: 150px;
  height: 20px;
  z-index: 1;
  background: ${({ theme }) => theme.opposite};
  position: relative;
  border-radius: 4px;
  &::before {
    content: "";
    z-index: 0;
    position: absolute;
    right: 100%;
    top: 4px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 12px solid ${({ theme }) => theme.opposite};
    border-bottom: 5px solid transparent;
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  text-align: center;
  border: none;
  outline: none;
  background: none;
  flex: 1;
  &:focus {
    color: ${({ theme }) => theme.primary};
  }
  z-index: 2;
`;

const ErrorMessage = styled.div`
  position: relative;
  color: red;
  font-size: 0.8rem;
  padding-left: 0.5rem;
`;

const AuthForm = ({ form, onChange, onSubmit, error}) => {
  const onKeyPress = e => {
    if(e.key === 'Enter') {
      onSubmit(e);
    }
  }
  return (
    <>
      <InputContainer>
        <AuthBox>
          <Input
            type="password"
            name="password"
            placeholder="..."
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={form.password}
          />
        </AuthBox>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    </>
  );
};

export default AuthForm;
