import React, { useReducer, createContext, useContext } from "react";

export const userInitialState = {
	user: { name: null, connected: false, groups: null, lists: null },
};

export function setName(state, action) {
	return {
		...state,
		user: {
			...state.user,
			name: action.payload,
		},
	};
}
