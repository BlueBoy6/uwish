import React from "react";
import styled from "styled-components";

export default function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  border-radius: 5px;
  padding: 10px 15px;
  background: linear-gradient(30deg, #227c9d -100%, #17c3b2 100%);
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
