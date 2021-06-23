import React from "react";
import styled from "styled-components";

export default function Page({ children }) {
  return <PageLayout>{children}</PageLayout>;
}

const PageLayout = styled.div`
  background: #fef9ef;
  padding: 20px;
  min-height: calc(100vh - 40px);
  font-family: Helvetica, Arial, Sans-Serif;
`;
