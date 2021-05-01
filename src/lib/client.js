import axios from "axios";
import { API_BASE_URL } from "../constants";

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 100000,
  withCredentials: true,
});
client.interceptors.request.use(
  function (config) {
    config.headers.Authorization = axios.defaults.headers.Authorization;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
client.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default client;
