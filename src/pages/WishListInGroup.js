import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGroup } from "context/group";

import Section from "components/layout/Section";

export default function WishList() {
  let { idGroup, idWishlist } = useParams();
  console.log("idGroup", idGroup, "idWishlist", idWishlist);
  const groupContext = useGroup().group;
  console.log("groupContext", groupContext);
  const wishlist = groupContext.wishlists.find(
    (wl) => wl.id === Number(idWishlist)
  );
  console.log("wishlist", wishlist);
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
