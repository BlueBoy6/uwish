import { User } from "./userTypes";
import { State } from "../storeTypes";
import { loginConnect } from "infra/login";

export const user = {
	jwt: sessionStorage["user-uwish-jwt"] || null,
	userName: sessionStorage["user-uwish-name"] || null,
	isLogged: false,
} as User;

export const login = async (
	state: State,
	{
		identifier,
		password,
		redirectToPersonnalSpace,
	}: { identifier: string; password: string; redirectToPersonnalSpace: any }
) => {
	const connection = await loginConnect(identifier, password);
	console.log("connection : ", connection);
	if (connection.user.confirmed) {
		sessionStorage["user-uwish-jwt"] = connection.jwt;
		state.user = { ...connection.user, jwt: connection.jwt, isLogged: true };
		redirectToPersonnalSpace();
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
