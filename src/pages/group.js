import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory, Link } from "react-router-dom";
import { useAuth } from "context/auth";
import { useGroup } from "context/group";

import MemberGroup from "components/atomic/memberGroup";
import Section from "components/layout/section";
import Button from "components/form/button";

export default function Group(...props) {
  let history = useHistory();
  let { idGroup } = useParams();
  const authContext = useAuth();
  const groupContext = useGroup();
  const groupMatched = authContext.user.groups.find((group) => {
    console.log("group", group);
    console.log("idGroup", idGroup);
    return group.id === Number(idGroup);
  });

  console.log("groupMatched", groupMatched);
  if (!groupMatched) {
    return (
      <div>
        <p>
          Salut petit coquin, on cherche à consulter un groupe où t'es pas
          invité ?
        </p>
        <Button onClick={() => history.push("/personnal-space")}>
          Aller je te raccompagne vers la sortie 😜
        </Button>
      </div>
    );
  }
  const getGroup = async () =>
    groupContext.getGroup({ token: authContext.user.jwt, idGroup });
  useEffect(() => {
    if (groupContext.group === null) getGroup();
  });
  if (groupContext.group === null) return <p>Chargement... petit chenapan..</p>;
  return (
    <>
      <Link to="/personnal-space">Retour à la tour</Link>
      <Section title={groupContext.group.Name} intern-align="left">
        <MembersLabel>Membres du groupe :</MembersLabel>
        <MemberGroups>
          {groupContext.group.users.map((user) => (
            <MemberGroup user={user} />
          ))}
        </MemberGroups>
      </Section>
    </>
  );
}

const MembersLabel = styled.h3`
  display: flex;
  width: 100%;
  color: #cccccc;
`;

const MemberGroups = styled.div`
  display: flex;
  max-width: 500px;
  flex-wrap: wrap;
`;
