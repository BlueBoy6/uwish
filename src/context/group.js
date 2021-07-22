import React, { useContext, createContext, useState } from "react";
import Api from "infra/api/api";

export const GroupContext = createContext();

export function ProvideGroup({ children }) {
  const group = useProvideGroup();
  return (
    <GroupContext.Provider value={group}>{children}</GroupContext.Provider>
  );
}

export function useGroup() {
  return useContext(groupContext);
}

function useProvideGroup() {
  const [group, setGroup] = useState(null);

  async function getGroup({ token, idGroup }) {
    const response = await Api.get({
      url: `/bands/${idGroup}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
