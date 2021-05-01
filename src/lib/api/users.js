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
