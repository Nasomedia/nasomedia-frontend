import axios from "axios";
import { BASE_URL } from "../../../constants";
import qs from "querystring";

export const get_access_token = async (username, password) => {
  const data = {
    grant_type: "password",
    username: username,
    password: password,
  };
  const url = `${BASE_URL}/login/access-token`;
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(data),
    url,
  };
  try {
    const res = await axios(options);
    return res.data.access_token;
  } catch (e) {
    if (e.response.status === 400) {
      throw new Error(e.response.data.detail);
    }
  }
};
