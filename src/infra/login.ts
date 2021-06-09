import Api from "infra/api/api";
import { translatorApiMessages } from "domain/apiMessages";

export const loginConnect = async (identifier: string, password: string) => {
	const login = await Api.post("/auth/local", {
		identifier: identifier,
		password: password,
	});
	if (login.success) {
		return login.data;
	}
	return { ...login, message: translatorApiMessages(login.error) };
};
