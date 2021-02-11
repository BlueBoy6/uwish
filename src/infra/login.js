import Api from "infra/api/api";
import { translatorApiMessages } from "domain/apiMessages";

export const loginConnect = async (login, password) => {
	const log = await Api.post("/auth/local", {
		identifier: login,
		password: password,
	});
	if (log.success) return log;
	console.log(log.error.data);
	return { ...log, message: translatorApiMessages(log.error) };
};
