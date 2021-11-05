import React from "react";
import { useAuth } from "context/auth";
import GroupResumeCard from "components/layout/GroupResumeCard";
import WishlistResumeCard from "components/layout/WishlistResumeCard";
import Section from "components/layout/Section";
import styled from "styled-components";

export default function personnalSpace() {
  const authContext = useAuth();
  console.log("authContext : ", authContext);
  return (
    <>
      {authContext.user.bands && (
        <Section title="Tes groupes">
          <Groups>
            <GroupResumeCardContainer>
              {authContext.user.bands.map((group) => (
                <GroupResumeCard key={group.id} group={group} />
              ))}
            </GroupResumeCardContainer>
          </Groups>
        </Section>
      )}
      <Section title="Tes listes de souhaits">
        {authContext.user.wishlists.map((wishlist) => (
          <WishlistResumeCard key={wishlist.id} wishlist={wishlist} />
        ))}
      </Section>
    </>
  );
}

const Groups = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 20px;
`;

const GroupResumeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
`;
