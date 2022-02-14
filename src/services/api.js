import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = "https://ness-commerce.herokuapp.com";
// const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: token,
    },
  };
}

async function loginAdmin(body) {
  return axios.post(`${BASE_URL}/admin/sign-in`, body);
}

async function registerAdmin(body, token) {
  const config = createConfig(token);
  return axios.post(`${BASE_URL}/admin/register/admin`, body, config);
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

async function getCartProducts(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/cart`, config);

  return promise;
}

async function postSendToCart(token, id) {
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/cart/${id}`, {}, config);

  return promise;
}

async function postRemovefromCart(token, id) {
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/remove-from-cart/${id}`, {}, config);

  return promise;
}

async function postConfirmBuy(token) {
  const config = createConfig(token);

  const promise = axios.post(`${BASE_URL}/confirm-buy`, {}, config);

  return promise;
}

const api = {
  loginAdmin,
  registerAdmin,
  registerProductAdmin,

  registerClient,
  loginClient,
  getAllProducts,
  getProduct,
  getCartProducts,
  postSendToCart,
  postRemovefromCart,
  postConfirmBuy,
};

export default api;
