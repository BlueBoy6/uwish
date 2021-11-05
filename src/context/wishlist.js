import React, { useContext, createContext, useState } from "react";
import Api from "infra/api/api";

export const WishlistContext = createContext();

export function ProvideWishlist({ children }) {
  const wishlist = useProvideWishlist();
  return (
    <WishlistContext.Provider value={wishlist}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}

function useProvideWishlist() {
  const [wishlist, setWishlist] = useState(null);

  async function getWishlist({ token, idWishlist }) {
    const response = await Api.get({
      url: `/wishlists/${idWishlist}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.success) {
      setWishlist(response.data);
    }
    return { success: true };
  }

  function modifyWishlist({ wishlistModified }) {
    setWishlist(wishlistModified);
    return { success: true };
  }

  async function updateWishlist({ token }) {
    console.log("old wishlist : ", wishlist);

    const reponse = await Api.put({
      url: `/wishlists/${wishlist.id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        ...wishlist,
      },
    });

    return { success: true };
  }

  return {
    wishlist,
    getWishlist,
    modifyWishlist,
    updateWishlist,
  };
}
