import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Section from "components/layout/Section";
import Button from "components/atomic/Button";
import Wish from "components/organism/Wish";
import { useWishlist } from "context/wishlist";
import { useAuth } from "context/auth";
import styled from "styled-components";

export default function WishListAdmin() {
  const [isModified, setModified] = useState(false);
  let { idWishlist } = useParams();
  const { user } = useAuth();
  const { wishlist, getWishlist, modifyWishlist, updateWishlist } =
    useWishlist();

  useEffect(() => {
    if (wishlist === null) getWishlist({ token: user.jwt, idWishlist });
  });

  const toggleIsPublic = () => {
    const wishlistModified = { ...wishlist, isPublic: !wishlist.isPublic };
    modifyWishlist({ wishlistModified });
    !isModified && setModified(true);
  };

  const deleteWish = (wishDeleted) => {
    const wishlistModified = {
      ...wishlist,
      Wishes: wishlist.Wishes.filter((wish) => wish.id !== wishDeleted.id),
    };
    modifyWishlist({ wishlistModified });
  };

  const modifiedWish = (wishModified) => {
    const wishlistModified = {
      ...wishlist,
      wishes: wishlist.Wishes.map((wish) => {
        if (wish.id === wishModified.id) {
          console.log("wish", wish);
          console.log("wishModified", wishModified);
          return wishModified;
        }
        return wish;
      }),
    };
    console.log("wishlistModified : ", wishlistModified);
    modifyWishlist({ wishlistModified });
  };

  const saveWishList = () => {
    updateWishlist({ token: user.jwt });
  };

  console.log("wishlist : ", wishlist);

  if (wishlist !== null && wishlist.user.id === user.id)
    return (
      <Section title={wishlist.name}>
        <Group>
          <p>
            Tu partages ta liste avec{" "}
            <BoldSelecter>{wishlist.band.name}</BoldSelecter>
          </p>
        </Group>
        <ListIsPublic>
          <p>
            Elle est{" "}
            <BoldSelecter onClick={toggleIsPublic}>
              {wishlist.isPublic ? "visible" : "invisible"}
            </BoldSelecter>{" "}
            pour ton groupe
          </p>
        </ListIsPublic>
        <ListWishes>
          <h3>Tes souhaits</h3>
          {wishlist.Wishes.map((wish) => (
            <Wish
              wish={wish}
              key={wish.id}
              onDelete={deleteWish}
              onModifiedWish={modifiedWish}
            />
          ))}
        </ListWishes>
        {isModified && (
          <Button onClick={saveWishList}>Sauvegarde moi ça !</Button>
        )}
      </Section>
    );
  else if (wishlist !== null && wishlist.user.id !== user.id)
    return <Section title="Alors alors ? On essaie de tricher ?" />;
  else return <Section title="Un moment chenapan, ça charge.." />;
}

const Group = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 20px;
`;

const ListIsPublic = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 20px;
`;

const BoldSelecter = styled.b`
  padding: 3px;
  background-color: rgba(23, 195, 178, 0.25);
  border-radius: 5px;
  transition: 0.15s ease;
  cursor: pointer;
  :hover {
    transition: 0.15s ease;
    background-color: rgba(23, 195, 178, 0.5);
  }
`;
const ListWishes = styled.div`
  display: grid;
  width: 100%;
`;
