import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function GroupResumeCard({ group }) {
  const groupName = group.Name;
  let history = useHistory();
  const enterToGroup = () => history.push(`/group/${group.id}`);
  return (
    <ResumeCard data-group-name={group.Name} onClick={enterToGroup}>
      {groupName}
    </ResumeCard>
  );
}

const ResumeCard = styled.div`
  display: inline-flex;
  background: #ffcb77;
  color: white;
  padding: 20px 40px;
  border-radius: 10px;
  font-family: Helvetica, Arial, Sans-Serif;
  font-weight: 600;
  margin: 10px;
  box-shadow: 0px 5px 5px 0px rgba(255, 203, 119, 0.25);
  cursor: pointer;
`;

GroupResumeCard.propTypes = {};
