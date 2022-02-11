import axios from "axios";

const BASE_URL = process.env.REACT_BASE_URL;

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
