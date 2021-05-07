import client from "../client";

export const read_user_me = async () => {
  const url = `/users/me`;
  const options = {
    method: "GET",
    url,
  };
  try {
    const res = await client.get(url);
    return res.data;
  } catch (e) {
    return null;
  }
};

export const create_user_open = async (password, email, full_name) => {
  const url = `/users/open`;
  try {
    const res = await client.post(url, {
      password: password,
      email: email,
      full_name: full_name,
    });
    return res.data;
  } catch (e) {
    if (typeof e.response.data.detail.msg !== "undefined") {
      throw new Error(e.response.data.detail.msg);
    } else {
      throw new Error(e.response.data.detail);
    }
  }
};
