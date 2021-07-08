import client from "../client";

export const readMyCash = async () => {
  const url = `/cash`;
  const options = {
    method: "GET",
    url,
  };
  try {
    const res = await client.get(url);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const readMyCashDeposit = async () => {
  const url = `/cash/deposit`;
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

export const readMyCashUsage = async () => {
  const url = `/cash/usage`;
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
