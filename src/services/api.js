import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "https://ness-commerce.herokuapp.com";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function loginAdmin(body) {
  return axios.post(`${BASE_URL}/admin/sign-in`, body);
}

async function registerProductAdmin(body, token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/admin/register/product`, body, config);
}

//================================================================

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

async function getProduct(body) {
  const promise = axios.get(`${BASE_URL}/products/${body}`);

  return promise;
}

async function getClientContent(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/user`, config);

  return promise;
}

async function postConfirmClientBuy(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/confirm-buy`, config)

  return promise;
}

const api = {
  loginAdmin,
  registerProductAdmin,

  registerClient,
  loginClient,
  getAllProducts,
  getProduct,
  getClientContent,
  postConfirmClientBuy
};

export default api;
