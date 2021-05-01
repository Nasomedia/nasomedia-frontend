import axios from "axios";
import cookie from "react-cookies";

function setToken(token) {
  axios.defaults.headers.Authorization = "Bearer " + token;

  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 1); // 1 days

  cookie.save("token", token, {
    path: "/",
    expires,
    httpOnly: process.env.NODE_ENV === "production" ? true : false,
  });
}

function removeToken() {
  axios.defaults.headers.Authorization = undefined;

  const expires = new Date();
  expires.setDate(Date.now() - 1000); // -1

  cookie.remove("token", {
    path: "/",
    httpOnly: process.env.NODE_ENV === "production" ? true : false,
  });
}

export { setToken, removeToken };
