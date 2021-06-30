import React from "react";
import styled from "styled-components";

export default function Section({ children, title, internAlign }) {
  return (
    <SectionContainer internAlign={alignement(internAlign)}>
      <SectionTitle>{title} </SectionTitle>
      {children}
    </SectionContainer>
  );
}

const alignement = (position) => {
  switch (position) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    case "center":
      return "center";
    default:
      return "flex-start";
  }
};

const SectionTitle = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fe6d73;
`;

const SectionContainer = styled.section`
  display: flex;
  justify-content: ${(props) => props.internAlign};
  flex-wrap: wrap;
  padding: 15px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.03);
  max-width: 700px;
  min-width: 300px;
  margin: auto;
  margin-top: 40px;
`;
