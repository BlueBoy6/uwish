import axios from "axios";

const apiUrl = "https://uwish.david6.fr";

export default {
	get: async (...params) => await ApiCall(config("get", ...params)),
	post: async (...params) => await ApiCall(config("post", ...params)),
	put: async (...params) => await ApiCall(config("post", ...params)),
};

const config = (method, url, data, headers) => ({
	method: method,
	url: `${apiUrl}${url}`,
	headers: { ...headers },
	transformResponse: (data) => {
		// Do whatever you want to transform the data
		return JSON.parse(data);
	},
	data: data || undefined,
});

async function ApiCall(conf) {
	try {
		const result = await axios(conf);
		return { success: true, response: result.data };
	} catch (err) {
		console.error(`une erreur est arrivé lors de la requête : ${err.message}`);
		return {
			success: false,
			error: err?.response || "something wrong happend",
		};
	}
}
