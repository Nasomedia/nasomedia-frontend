import axios from "axios";
import { BASE_URL } from "../../constants";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
