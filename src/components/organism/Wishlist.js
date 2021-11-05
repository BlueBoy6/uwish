import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Wishlist(props) {
  const { wishlist, othersMembers } = props;
  const unknownMember = { username: "un inconnu en manque d'amour" };

  const [creator, setCreator] = useState(false);
  const creatorInMembers = othersMembers
    .map((member) => ({
      id: member.id,
      name: member.username,
    }))
    .find((member) => member.id === wishlist.user);

  useEffect(() => {
    if (creatorInMembers === undefined) setCreator(unknownMember);
    if (!creator) setCreator(creatorInMembers);
  });

  return (
    <WishList>
      <BackgroundedTopContainer>
        <BackgroundedTitle>{wishlist.name}</BackgroundedTitle>
      </BackgroundedTopContainer>
      <CreatorOfList>
        {creator && (
          <>
            <p className="enonce">créée par</p>
            <Creator>{creator.name}</Creator>
          </>
        )}
      </CreatorOfList>
    </WishList>
  );
}

const WishList = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 6px 0px rgba(254, 109, 115, 0.3);
  cursor: pointer;
  will-change: transform;
  transition: 0.3s ease;
  :hover {
    transform: scale(1.03);
    transition: 0.3s ease;
    box-shadow: 0px 2px 10px 0px rgba(254, 109, 115, 0.45);
  }
`;
const BackgroundedTopContainer = styled.div`
  position: relative;
  display: grid;
  height: 200px;
  background-image: linear-gradient(192deg, #ffcb77 -50%, #fe6d73 150%);
`;
const BackgroundedTitle = styled.div`
  position: relative;
  display: grid;
  align-self: end;
  font-family: Comfortaa;
  font-size: 1.8rem;
  padding: 10px;
  font-weight: 700;
  color: white;
  text-decoration: none;
`;
const CreatorOfList = styled.div`
  display: grid;
  position: relative;
  height: 100px;
  padding-left: 10px;
  border-radius: 10px;
  text-decoration: none;
  p.enonce {
    color: #6c757d;
    margin: 0;
    font-size: 0.85rem;
    align-self: end;
  }
`;

const Creator = styled.p`
  font-size: 1.8rem;
  color: #ffcb77;
  width: 100%;
  font-weight: 600;
  margin: 0;
  text-decoration: none;
`;
