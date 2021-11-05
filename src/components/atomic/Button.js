import React from "react";
import styled from "styled-components";

export default function Button({ className, children, onClick }) {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  border-radius: 10px;
  padding: 10px 15px;
  background: linear-gradient(30deg, #227c9d -100%, #17c3b2 100%);
  background: #227c9d;
  box-shadow: 0px 4px 9px -4px #1ba8aa;
  border: none;
  color: #ffffff;
  cursor: pointer;
  transition: 0.1s ease-in;
  &:hover {
    transition: 0.1s ease-in;
    background: #17c3b2;
  }
`;
