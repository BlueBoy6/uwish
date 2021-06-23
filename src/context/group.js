import React, { useContext, createContext, useState } from "react";
import Api from "infra/api/api";

export const groupContext = createContext();

export function ProvideGroup({ children }) {
  const group = useProvideGroup();
  return (
    <groupContext.Provider value={group}>{children}</groupContext.Provider>
  );
}

export function useGroup() {
  return useContext(groupContext);
}

function useProvideGroup() {
  const [group, setGroup] = useState(null);

  async function getGroup({ token, idGroup }) {
    const response = await Api.get({
      url: `/groups/${idGroup}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("log group : ", response);
    if (response.success) {
      setGroup({ ...response.data });
    }
    return { success: true };
  }

  return {
    group,
    getGroup,
  };
}
