import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: token,
    },
  };
}

async function registerClient(body) {
  const promise = axios.post(`${BASE_URL}/client/register`, body);
  return promise;
}

async function loginClient(body) {
  const promise = axios.post(`${BASE_URL}/client/login`, body);

  return promise;
}

async function getAllProducts() {
  const promise = axios.get(`${BASE_URL}/products`);

  return promise;
}

async function getClientContent(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/client/get-user`, config);

  return promise;
}

const api = {
  registerClient,
  loginClient,
  getAllProducts,
  getClientContent,
};

export default api;
