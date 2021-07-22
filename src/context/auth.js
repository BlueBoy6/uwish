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
const userSession = sessionStorage.getItem("user-data")
  ? JSON.parse(sessionStorage.getItem("user-data"))
  : null;
function useProvideAuth() {
  const [user, setUser] = useState(userSession);

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
      const dataUser = {
        jwt: response.data.jwt,
        id,
        email,
        bands,
        username,
        wishlists,
        groups: response.data.user.bands,
      };

      sessionStorage.setItem("user-data", JSON.stringify(dataUser));
      setUser(dataUser);
      return { success: true };
    }
    return { success: false };
  }

  const signout = () => {
    return fakeAuth.signout(() => {
      setUser(null);
    });
  };

  const refreshUser = () => {
    const userData = sessionStorage.getItem("user-data");
    console.log("userData : ", userData);
    if (userData) {
      console.log("avant le parse : ", JSON.parse(userData));
      setUser(JSON.parse(userData));
      console.log("après le parse", user);
    }
  };

  return {
    user,
    refreshUser,
    signin,
    signout,
  };
}
