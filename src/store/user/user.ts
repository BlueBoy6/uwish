import { User } from "./userTypes";
import { State } from "../storeTypes";
import { loginConnect } from "infra/login";

export const user = {
	jwt: sessionStorage["user-uwish-jwt"] || null,
	userName: sessionStorage["user-uwish-name"] || null,
} as User;

export async function login(
	state: State,
	{
		identifier,
		password,
		redirectPage,
	}: { identifier: string; password: string; redirectPage: any }
) {
	const connection = (await loginConnect(identifier, password)) as any;

	sessionStorage["user-uwish-jwt"] = connection.jwt;
	state.user = { ...connection.user, jwt: connection.jwt };
	console.log("state : ", state);
	redirectPage();
	return state;
}

export function logout(state: State) {
	sessionStorage.clear();
	state.user.jwt = null;
	state.user.userName = null;
	return state;
}
