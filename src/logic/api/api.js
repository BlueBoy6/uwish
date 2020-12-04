import axios from "axios";

const apiUrl = "https://uwish.david6.fr";

export const api = async (method, url, data, headers) => {
	const config = {
		method: method,
		url: `${apiUrl}${url}`,
		headers: { ...headers },
		data: data
			? {
					...data,
			  }
			: undefined,
	};
	try {
		return await axios(config);
	} catch (e) {
		console.log("error : ", e);
	}
};
