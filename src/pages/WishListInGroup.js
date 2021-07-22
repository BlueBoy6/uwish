import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGroup } from "context/group";

import Section from "components/layout/Section";

export default function WishList() {
  let { idGroup, idWishlist } = useParams();
  const groupContext = useGroup().group;

  const wishlist = groupContext.wishlists.find(
    (wl) => wl.id === Number(idWishlist)
  );

  return (
    <>
      <Link to={`/group/${idGroup}`}>On retourne voir la bande</Link>
      <Section title={wishlist.name}>
        <ul>
          {wishlist && wishlist.Wishes.map((wish) => <li>{wish.name}</li>)}
        </ul>
      </Section>
    </>
  );
}
