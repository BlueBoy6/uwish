import axios from "axios";

const apiUrl = "http://localhost:2333";

export default {
  get: ({ url, data, headers }) =>
    ApiCall(config({ method: "get", url, data, headers })),
  post: ({ url, data, headers }) =>
    ApiCall(config({ method: "post", url, data, headers })),
  put: ({ url, data, headers }) =>
    ApiCall(config({ method: "put", url, data, headers })),
};

const config = ({ method, url, data, headers }) => ({
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
    return { success: true, data: result.data };
  } catch (err) {
    console.error(`une erreur est arrivé lors de la requête : ${err.message}`);
    return {
      success: false,
      error: err?.response || "something wrong happend",
    };
  }
}
