import axios from "axios";
import { useAuth } from "../context/Auth";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const { token } = useAuth();

const heardersAuth = {
  headers: {
    Authorization: token,
  },
};

async function loginAdmin(body) {
  return axios.post(`${BASE_URL}/admin/sign-in`, body, heardersAuth);
}

async function registerProductAdmin(body) {
  return axios.post(`${BASE_URL}/admin/register/product`, body);
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

async function getClientContent(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/client/get-user`, config);

  return promise;
}

const api = {
  loginAdmin,
  registerProductAdmin,

  registerClient,
  loginClient,
  getAllProducts,
  getClientContent,
};

export default api;
