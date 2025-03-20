import axios from "axios";

const API_URL = `http://localhost:5001/api-v1`;
console.log("API Base URL in apiCall.js:", API_URL);

const api = axios.create({
    baseURL: API_URL,
});

export function setAuthToken(token) {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else {
        delete api.defaults.headers.common["Authorization"];
    }
}

export default api;