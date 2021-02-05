import React, { useReducer, createContext, useContext } from "react";
import { userInitialState, login, logout, setUserGroups } from "./user/user";
import { State } from "./storeTypes";

const states: State = { ...userInitialState };
const actions = [login, setUserGroups, logout];

const AppContext = createContext<any>(states);

function reducerActions(state: any, payload: any) {
	const dispatcher = actions.find((action) => action.name === payload.type);
	console.log("dispatch and payload", dispatcher, payload);
	if (dispatcher) return dispatcher(state, payload);
	throw new Error(`Aucune action "${payload.type}" n'existe.`);
}

export const StoreProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(reducerActions, states);
	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export const useStore = () => {
	const { state, dispatch } = useContext(AppContext) as any;
	return { state, dispatch };
};
