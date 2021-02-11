import React, { useReducer, createContext, useContext } from "react";
import { user, login, logout } from "store/user/user";
import { groups, setGroups } from "store/groups/groups";
import { State } from "./storeTypes";

const states: State = { user, groups };
const actions = [login, logout, setGroups];

const AppContext = createContext<any>(states);

function reducerActions(state: any, payload: any) {
	console.log(payload);
	const dispatcher = actions.find((action) => action.name === payload.type);
	if (dispatcher) return dispatcher(state, payload.payload);
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
