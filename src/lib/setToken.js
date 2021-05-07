import axios from "axios";
import cookie from "react-cookies";

import * as cookies from "cookie";

function setToken(token) {
  axios.defaults.headers.Authorization = "Bearer " + token;

  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 1); // 1 days

  if (typeof document === "object" && typeof document.cookie === "string") {
    document.cookie = `token=${token}; path=/; expires=${expires.toUTCString()} SameSite=Lax`;
  }
}

function removeToken() {
  axios.defaults.headers.Authorization = undefined;

  if (typeof document === "object" && typeof document.cookie === "string") {
    document.cookie = "token=; path=/; max-age=-1 SameSite=Lax";
  }
}

export { setToken, removeToken };
