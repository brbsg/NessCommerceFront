import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function registerClient(body) {
    const promise = axios.post(`${BASE_URL}/register-client`, body);
    return promise;
}

async function loginClient(body) {
    const promise = axios.post(`${BASE_URL}/login-client`, body);

    return promise;
}

const api = {
    registerClient,
    loginClient
}

export default api;