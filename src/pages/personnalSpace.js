import React from "react";
import { useAuth } from "context/auth";
import GroupResumeCard from "components/layout/groupResumeCard";
import Section from "components/layout/section";
import styled from "styled-components";

export default function personnalSpace() {
  const authContext = useAuth();
  console.log(authContext);
  return (
    <Section>
      <SectionTitle>
        Espace perso
      </SectionTitle>
      <Groups>
        <GroupsTitle>
          vos groupes :
        </GroupsTitle>
        {authContext.user.groups.map((group) => (
          <GroupResumeCard key={group.id} group={group} />
        ))}
      </Groups>
    </Section>
  );
}

const SectionTitle = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.5rem;
  color: #FE6D73;
`;

const Groups = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GroupsTitle = styled.div`
font-size: 1.1rem;
width: 100%;
`
