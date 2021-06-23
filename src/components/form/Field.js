import React from "react";
import styled from "styled-components";

export default function Field({ children }) {
  return <FieldInput>{children}</FieldInput>;
}

const FieldInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
`;
