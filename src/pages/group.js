import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useHistory, Link } from "react-router-dom";
import { useAuth } from "context/auth";
import { useGroup } from "context/group";

import MemberGroup from "components/atomic/memberGroup";
import Wishlist from "components/organism/Wishlist";
import Section from "components/layout/Section";
import Button from "components/form/Button";

export default function Group(...props) {
  let history = useHistory();
  let { idGroup } = useParams();
  const authContext = useAuth();
  const groupContext = useGroup();
  const groupMatched = authContext.user.groups.find(
    (group) => group.id === Number(idGroup)
  );

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

  const { group } = groupContext;

  if (group === null) return <p>Chargement... petit chenapan..</p>;
  return (
    <>
      <Link to="/personnal-space">Retour à la tour</Link>
      <Section title={groupContext.group.name} intern-align="left">
        <MembersLabel>Membres du groupe :</MembersLabel>
        <MemberGroups>
          {groupContext.group.users.map((user) => (
            <MemberGroup user={user} key={user.id} />
          ))}
        </MemberGroups>
        <WishLists>
          {group.wishlists.map((wishlist) => (
            <Link
              key={wishlist.id}
              to={`/group/${group.id}/wishlist/${wishlist.id}`}
            >
              <Wishlist wishlist={wishlist} othersMembers={group.users} />
            </Link>
          ))}
        </WishLists>
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

const WishLists = styled.div`
  position: relative;
  width: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
