import React, { useReducer, createContext, useContext } from "react";
import { userInitialState, setName } from "./user/user";

const states = { ...userInitialState };

const actions = {
	setName,
};

const StoreContext = createContext(states);

function reducerActions(state, action) {
	return actions[action.type](state, action);
}

export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerActions, states);
	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	);
};

export const useStore = (store) => {
	const { state, dispatch } = useContext(StoreContext);
	return { state, dispatch };
};
