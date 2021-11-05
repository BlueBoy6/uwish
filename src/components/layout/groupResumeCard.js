import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function GroupResumeCard({ group }) {
  let history = useHistory();
  console.log("group :", group);
  const enterToGroup = () => history.push(`/group/${group.id}`);
  return (
    <ResumeCard data-group-name={group.name} onClick={enterToGroup}>
      {group.name}
    </ResumeCard>
  );
}

const ResumeCard = styled.div`
  background: #ffcb77;
  color: white;
  padding: 20px;
  border-radius: 10px;
  font-weight: 600;
  box-shadow: 0px 5px 5px 0px rgba(255, 203, 119, 0.25);
  cursor: pointer;
  text-align: center;
`;

GroupResumeCard.propTypes = {};
