import axios from "axios";
import { API_BASE_URL } from "../constants";

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 100000,
  withCredentials: true,
});
client.interceptors.request.use(
  function (config) {
    if (typeof document === "object" && typeof document.cookie === "string") {
      function getCookie(name) {
        let matches = document.cookie.match(
          new RegExp(
            "(?:^|; )" +
              name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
              "=([^;]*)"
          )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      const token = getCookie("token");
      config.headers.Authorization = "Bearer " + token;
      return config;
    }
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
