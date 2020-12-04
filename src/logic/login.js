import { api } from "../logic/api/api";

export const loginConnect = async (login, password) => {
	try {
		return await api("post", "/auth/local", {
			identifier: login,
			password: password,
		});
	} catch (err) {
		console.log("err : ", err);
	}
};
