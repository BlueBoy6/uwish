import { User } from "./userTypes";
import { State } from "../storeTypes";

export const userInitialState = {
	user: {
		jwt: sessionStorage["user-uwish-jwt"] || null,
		userName: sessionStorage["user-uwish-name"] || null,
		groups: null,
		wishlists: null,
	} as User,
};

export function login(state: State, action: any) {
	sessionStorage["user-uwish-jwt"] = action.payload.jwt;
	sessionStorage["user-uwish-name"] = action.payload.user.username;
	state.user.jwt = action.payload.jwt;
	state.user.userName = action.payload.user.username;
	console.log("login ok", state);

	return state;
}

export function logout(state: State) {
	sessionStorage.clear();
	state.user.jwt = null;
	state.user.userName = null;
	return state;
}

export function setUserGroups(state: State, action: any) {
	return {
		...state,
		groups: action.payload,
	};
}
