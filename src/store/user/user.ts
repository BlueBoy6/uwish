import { User } from "./userTypes";
import { State } from "../storeTypes";

export const user = {
	jwt: sessionStorage["user-uwish-jwt"] || null,
	userName: sessionStorage["user-uwish-name"] || null,
	isLogged: false,
} as User;

export const login = (state: State, user: any) => {
	console.log("user received in store", user.user.confirmed);
	if (user.user.confirmed) {
		sessionStorage["user-uwish-jwt"] = user.jwt;
		state.user = { ...user.user, jwt: user.jwt, isLogged: true };
		console.log("storeee : ", state);
		return state;
	}
	return state;
};

export function logout(state: State) {
	sessionStorage.clear();
	state.user.jwt = null;
	state.user.userName = null;
	return state;
}
