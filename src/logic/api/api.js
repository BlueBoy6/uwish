import axios from "axios";

const apiUrl = "https://uwish.david6.fr";

export const api = async (method, url, data) => {
	try {
		return await axios({
			method: method,
			url: `${apiUrl}${url}`,
			data: data
				? {
						...data,
				  }
				: undefined,
		});
	} catch (e) {
		console.log("error : ", e);
	}
};
