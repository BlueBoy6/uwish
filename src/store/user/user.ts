import { User } from "./userTypes";
import { State } from "../storeTypes";

export const user = {
	jwt: sessionStorage["user-uwish-jwt"] || null,
	userName: sessionStorage["user-uwish-name"] || null,
	wishlists: null,
} as User;

export function login(state: State, payload: any) {
	sessionStorage["user-uwish-jwt"] = payload.jwt;
	sessionStorage["user-uwish-name"] = payload.user.username;
	state.user.jwt = payload.jwt;
	state.user.userName = payload.user.username;
	return state;
}

export function logout(state: State) {
	sessionStorage.clear();
	state.user.jwt = null;
	state.user.userName = null;
	return state;
}
