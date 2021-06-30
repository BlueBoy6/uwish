import React from "react";
import styled from "styled-components";

export default function memberGroup({ user }) {
  return <Member>{user.username}</Member>;
}

const Member = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 10px;
  background: #17c3b2;
  border-radius: 8px;
  margin-top: 8px;
  color: white;
`;
