const httpGet = (url) => fetch(url).then((response) => response.json());

const http = {
  get: httpGet,
};

export default http;
