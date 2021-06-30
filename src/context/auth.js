import React, { useContext, createContext, useState } from "react";
import Api from "infra/api/api";

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  async function signin({ identifier, password }) {
    const response = await Api.post({
      url: "/auth/local",
      data: {
        identifier: identifier,
        password: password,
      },
    });
    if (response.success) {
      const { id, email, bands, username, wishlists } = response.data.user;
      setUser({
        jwt: response.data.jwt,
        id,
        email,
        bands,
        username,
        wishlists,
        groups: response.data.user.bands,
      });
    }
    return { success: true };
  }

  const signout = () => {
    return fakeAuth.signout(() => {
      setUser(null);
    });
  };

  return {
    user,
    signin,
    signout,
  };
}
